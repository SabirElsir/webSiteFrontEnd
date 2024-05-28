// NavBar.js
import React, { useState } from "react";
import "../styles/NavBar.css";
// NavBar.js
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <div className="logo">
        <img src="../images/logo.png" height={50} />
        Sabir Elsir Engineering Consultants
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        <i className={`fas ${isActive ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </nav>
  );
};

export default NavBar;
