import React, { useState } from "react";
import "../App.css";
import { IoIosPlay } from "react-icons/io";
import { FormData } from "./Form";

import logo1 from "../assets/company1.jpg";
import logo2 from "../assets/company2.jpg";
import logo3 from "../assets/company3.jpg";
import logo4 from "../assets/company4.jpg";
import logo5 from "../assets/comapny5.jpg";
import logo6 from "../assets/company6.jpg";

export const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleConnectClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="home-container ">
      <div className="home_page flex ">
        <div className="home   md:ml-[90px] w-full m-auto">
          <h1 className="home_text text-[30px] md:text-[70px] md:mt-10 ">
            There's never been a better time to be a better marketer
          </h1>
          <p className="mt-10 lg:mt-0 md:mt-10">
            Data is flowing and channels are growing. Customers are demanding
            the world, while AI is already transforming it. Manage it all with
            the <b>Customer engagement platform</b>
          </p>
          <div className="home_btn mt-10 md:mt-14 m-auto lg:m-8">
            <button className="primary-btn">Get Started</button>

            <button className="primary-btn2">
              Watch Video <IoIosPlay />
            </button>
          </div>
        </div>
        <div className=" hidden md:hidden   lg:flex">
          <img
            src="https://quest-labs-liart.vercel.app/static/media/hp-player-crop.c4e8fe80aecce6fe3d14.webp"
            alt=""
            className="home-image  "
          />
        </div>
      </div>

      <div className="company_logo_Container mt-14 md:mt-24 lg:mt-0 ">
        <p className="company_logo_text">
          MADE TO SCALE WITH COMPANIES OF ALL SIZES
        </p>

        <div className="company_logos">
          <img src={logo1} className="w-16 hidden md:hidden lg:block" alt="" />
          <img src={logo2} className="w-16 hidden md:hidden lg:block" alt="" />
          <img src={logo3} className="w-16 hidden md:hidden lg:block" alt="" />
          <img src={logo4} className="w-16 hidden md:hidden lg:block" alt="" />
          <img src={logo5} className="w-16 hidden md:hidden lg:block" alt="" />
          <img src={logo6} className="w-16 hidden md:hidden lg:block" alt="" />

          <button className="connect_btn" onClick={handleConnectClick}>
            Connect With Sales
          </button>
        </div>
        <div></div>
      </div>

      {showForm && <FormData onClose={handleCloseForm} />}
    </div>
  );
};
