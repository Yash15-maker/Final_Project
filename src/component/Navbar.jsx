import React from "react";
import "./css/Navbar.css";

export default function Navbar() {
  return (
    <header id="header">
      <div className="main-head">
       
        <div className="nav-logo">
          <div className="logo">
            <img src="images\logo1.png" alt="nav-icon" className="nav-icon" />
          </div>
          <h1 className="nav-text">ABC Products</h1>
        </div>
        <div className="main-logo">
          <img src="images\logo.svg" alt="main-icon" className="main-icon" />
        </div>
      </div>
      <div></div>
    </header>
  );
}
