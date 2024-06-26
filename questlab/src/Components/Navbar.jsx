import React from "react";
import { TbWorld } from "react-icons/tb";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="navs">
          <span className="company-name">braze</span>
          <a href="#" className="nav-content">
            How it Works
          </a>
          <a href="#" className="nav-content">
            Product
          </a>
          <a href="#" className="nav-content">
            Solutions
          </a>
          <a href="#" className="nav-content">
            Customers
          </a>
          <a href="#" className="nav-content">
            Success
          </a>
          <a href="#" className="nav-content">
            Partners
          </a>
          <a href="#" className="nav-content">
            Resources
          </a>
          <a href="#" className="nav-content">
            Company
          </a>
        </div>
        <div className="nav-title">
          <div className="selectbtn">
            <div><TbWorld /></div>
            <select name="" id="">
              <option value="US">US</option>
              <option value="India">India</option>
            </select>
          </div>
          <a href="#" className="nav-content">
            Login
          </a>
          <a href="#" className="nav-content">
           <button className="getStarted-btn">Get started</button>
          </a>
        </div>
      </nav>
    </>
  );
};
