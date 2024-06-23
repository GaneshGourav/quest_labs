import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="navs">
          <p className="company-name">braze</p>
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
          <a href="#" className="nav-content">
            Signup
          </a>
          <a href="#" className="nav-content">
            Login
          </a>
        </div>
      </nav>
    </>
  );
};
