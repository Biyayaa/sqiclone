import React from "react";
import "./index.css";
import logo from './images/sqilogo.jpg';

function Navbar() {
  return (
    <div>
      <div className="nav">
        <h1>Hello</h1>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
