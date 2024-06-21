import React from "react";
import "../App.css";

export const FormData = () => {
  return (
    <>
      <div className="main-Container">
        <p className="form-heading">Connect With Sales</p>
        <form action="">
          <div className="form-field">
            <label htmlFor="">First Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="first_name"
              className="input-field"
            />
          </div>
          <div className="form-field">
            <label htmlFor="">Last Name:</label>
            <input type="text" placeholder="Enter your name" name="last_name"  className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="">Email Address:</label>
            <input type="email" placeholder="Enter your email" name="email"  className="input-field" />
          </div>
          <div className="form-field">
            <label htmlFor="">company:</label>
            <input
              type="text"
              placeholder="Enter yourcompany name"
              name="company"
               className="input-field"
            />
          </div>
          <div className="form-field">
            <label htmlFor="">phone Number:</label>
            <input
              type="number"
              placeholder="Enter your phone Number"
              name="phone"
               className="input-field"
            />
          </div>

          <div className="form-field">
            <label htmlFor="">Job Title:</label>
            <input type="text" placeholder="Enter your name" name="name"  className="input-field" />
          </div>

          <div>
            <button type="submit" className="form-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
