import React, { useEffect, useState } from "react";
import "../App.css";

export const FormData = ({ onClose }) => {
  const [formDatas, setFormDatas] = useState([]);
  const [inputValues, setInputValues] = useState({
    "First name": "Ganesh",
    "Last name": "Kumar",
    "Email address": "ganesh@gmail.com",
    "Company": "Masai",
    "Phone number": "1234567890",
    "Job Title": "Engineer",
    "Industry": "IT Sector",
    "Number of Employees": "10",
    "Country": "India",
  });

  const [stage, setStage] = useState(1);
  const [animateExit, setAnimateExit] = useState(false);

  function getData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        apikey: "k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTM1ZTFhY2M0LTlmNGYtNGY3OS1hZGMxLWUyZTg0ZjMyZDNlOSIsImlhdCI6MTcxODk4MDM5MiwiZXhwIjoxNzE5NTg1MTkyfQ.2lCdj1a15GNsjGephnhb2VegIv7O1lz6h-6C4_uHfIk",
        userid: "u-35e1acc4-9f4f-4f79-adc1-e2e84f32d3e9",
      },
    };

    fetch(
      "https://staging.questprotocol.xyz/api/v2/entities/e-b66bca24-f6ce-4489-b2e9-e24a90e04877/campaigns/c-14d4f959-5999-4308-af48-37549b89eec7",
      options
    )
      .then((response) => response.json())
      .then((response) => setFormDatas(response.data.actions))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e, title) => {
    setInputValues({
      ...inputValues,
      [title]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
  };

  const handleNext = () => {
    setStage(2);
  };

  const handleBack = () => {
    setStage(1);
  };

  const handleClose = () => {
    setAnimateExit(true);
    setTimeout(() => {
      onClose();
    }, 500); // Match the duration of the slideOut animation
  };

  const stage1Fields = ["First name", "Last name", "Email address", "Company"];
  const stage2Fields = ["Phone number", "Job Title", "Industry", "Number of Employees", "Country"];

  const renderFields = (fields) => {
    return fields.map((fieldTitle) => {
      const fieldData = formDatas.find((el) => el.title === fieldTitle);
      if (!fieldData) return null;

      return (
        <div key={fieldData.id} className="form-field">
          <label htmlFor={fieldData.title} className="form_label">{fieldData.title}:</label>
          <input
            type={
              fieldData.title === "Email address"
                ? "email"
                : fieldData.title === "Phone number"
                ? "number"
                : "text"
            }
            placeholder={fieldData.title}
            value={inputValues[fieldData.title] || ""}
            onChange={(e) => handleChange(e, fieldData.title)}
            className="input-field"
            required
          />
        </div>
      );
    });
  };

  return (
    <div className={`form-container ${animateExit ? 'form-container-exit' : 'form-container-enter'}`}>
      <div className="form-heading">
      <p className="form-heading">Connect With Sales</p>
      <p onClick={handleClose} className=" close-button">
        X
      </p>
      </div>
     
      <div className="form-stage-indicator">
        <span className={stage === 1 ? "active-stage" : ""}>Stage 1</span>
        <span> / </span>
        <span className={stage === 2 ? "active-stage" : ""}>Stage 2</span>
      </div>
      <form onSubmit={handleSubmit}>
        {stage === 1 && renderFields(stage1Fields)}
        {stage === 2 && renderFields(stage2Fields)}

        <div>
          {stage === 1 && (
            <button type="button" onClick={handleNext} className="form-button">
              Next 
            </button>
          )}
          {stage === 2 && (
            <>
              <button type="button" onClick={handleBack} className="form-button">
                Back
              </button>
              <button type="submit" className="form-button">
                Submit
              </button>
            </>
          )}
        </div>
      </form>
      
    </div>
  );
};











