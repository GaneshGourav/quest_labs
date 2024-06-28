import React from "react";
import { TbWorld } from "react-icons/tb";

export const Navbar = () => {
  return (
    <>
      <nav className="nav  md:w-[90%] w-full">
        <div className="navs">
          <span className="company-name mr-2">braze</span>
          <div className="  w-[100%] lg:flex md:hidden justify-between  hidden">
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
        </div>
        <div className="nav-title   lg:w-[30%] w-[100%] md:w-full ">
          <div className="selectbtn hidden md:flex  ">
            <div><TbWorld /></div>
            <select name="" id="" >
              <option value="US">US</option>
              <option value="India">India</option>
            </select>
          </div>
          <a href="#" className="nav-content  md:block">
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
