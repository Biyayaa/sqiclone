import React from "react";
import "./index.css";
import logo from "./images/sqilogo.jpg";
import { ChevronDown } from "react-bootstrap-icons";

function Navbar() {
  return (
    <div>
      <nav className="shadow-sm">
        <div className="nav">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>

          <div className="links">
            <a href="#">
              About <ChevronDown />
              <div className="drop shadow-sm">
                <a>Our Story</a>
                <a>Our Team</a>
              </div>
            </a>


            <a href="#">
              Programmes <ChevronDown />
              <div className="drop shadow-sm">
                <a>National Innvation Diploma</a>
                <a>Professional Diploma Program</a>
                <a>Executive Professional Certificate Program</a>
              </div>
            </a>


            <a href="#">
              Admissions <ChevronDown />
              <div className="drop shadow-sm">
                <a>Apply for a programme</a>
                <a>Mode of Study</a>
                <a>Tuition</a>
                <a>Frequently Asked Questions</a>
              </div>
            </a>


            <a href="#">
              E-Portal <ChevronDown />
              <div className="drop shadow-sm">
                <a>Student</a>
                <a>Staff</a>
              </div>
            </a>


            <a href="#">SQI Scholarship</a>
            <a href="#">News</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
