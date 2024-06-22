import React, { useState } from "react";
import "../App.css";
import { FormData } from "./Form";

export const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleConnectClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="home-container">
      <div className="home_page">
        <div className="home">
          <h1 className="home_text">There's never been a better time to be a better marketer</h1>
          <p>Data is flowing and channels are growing. Customers are demanding the world, while AI is already transforming it. Manage it all with the <span>Customer engagement platform</span></p>
          <div className="home_btn">
            <button className="primary-btn">Get Started</button>
            <button className="primary-btn2">Watch Video</button>
          </div>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1927881398/photo/group-of-business-persons-talking-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=XgCcUuvLxis9v5Tx4imANNyDgmpjFfyVeF2w1kaupPY=" alt="" />
        </div>
      </div>

      <div className="company_logo_Container">
        <p className="company_logo_text">Made to scale company with all size</p>
        <div className="company_logos">
          <p>elf</p>
          <p>Intuit</p>
          <p>Going</p>
          <p>Gyme</p>
          <p>Chimpass</p>
          <button className="connect_btn" onClick={handleConnectClick}>Connect With Sales</button>
        </div>
      </div>

      {showForm && <FormData onClose={handleCloseForm} />}
    </div>
  );
};
