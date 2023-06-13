import React from "react";
import fb from './images/facebook-logo.png';
import linkedln from './images/linkedin.png';
import twitter from './images/twitter-logo.png';
import whatsapp from './images/whatsapp-logo.png';
import "./index.css";
import logo from "./images/sqilogo.jpg";
import { ChevronDown } from "react-bootstrap-icons";

function Navbar() {
  return (
    <div>
    <nav className='d-flex align-items-center justify-content-around fixed-top shadow-sm border'>
        <div className='w-25 logo-div'>
            <img src={logo} alt="" className='w-25' />
        </div>
        <div className='d-flex align-items-center justify-content-within right-nav'>
            <button className='me-3 position-relative link'>
                <h6 className='nav-text'>About <ChevronDown className='arrow-down-icon' /></h6>
                <div className='position-absolute home-drop shadow-sm py-3'>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Our Story</h6></button>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Our Team</h6></button>
                </div>
            </button>
            <button className='me-4 position-relative link'>
                <h6 className='nav-text'>Programmes <ChevronDown className='arrow-down-icon' /></h6>
                <div className='position-absolute programmes-drop shadow-sm py-3'>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>National Innovation Diploma</h6></button>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Professional Diploma Program</h6></button>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Executive Professional Certificate Program</h6></button>
                </div>
            </button>
            <button className='me-4 position-relative link'>
                <h6 className='nav-text'>Admissions <ChevronDown className='arrow-down-icon' /></h6>
                <div className='position-absolute admissions-drop shadow-sm py-3'>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Apply for a programme</h6></button>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Mode of Study</h6></button>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Tuition</h6></button>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Frequently Asked Questions</h6></button>
                </div>
            </button>
            <button className='me-4 position-relative link'>
                <h6 className='nav-text'>E-Portal <ChevronDown className='arrow-down-icon' /></h6>
                <div className='position-absolute e-portal-drop shadow-sm py-3'>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Student</h6></button>
                    <button className='pt-1 text-start ps-3'><h6 className='d-text'>Staff</h6></button>
                </div>
            </button>
            <button className='me-4'>
                <h6 className='nav-text'>SQI Schorlaship</h6>
            </button>
            <button className='me-4'>
                <h6 className='nav-text'>News</h6>
            </button>
        </div>
    </nav>
    <div className='position-absolute fix-logo1'>
        <div className='position-fixed s'>
            <button className='fb'>
                <img src={fb} alt="" className='fb-img' />
            </button>
        </div>
    </div>
    <div className='position-absolute fix-logo2'>
        <div className='position-fixed s'>
            <button className='twitter d-flex align-items-center justify-content-center'>
                <img src={twitter} alt="" className='twitter-img' />
            </button>
        </div>
    </div>
    <div className='position-absolute fix-logo3'>
        <div className='position-fixed s'>
            <button className='linkedln d-flex align-items-center justify-content-center'>
                <img src={linkedln} alt="" className='linkedln-img' />
            </button>
        </div>
    </div>
    <div className='chat position-absolute'>
        <div className='position-fixed whatsapp-div rounded-circle d-flex align-items-center justify-content-center'>
            <img src={whatsapp} alt="" className='whatsapp-img'/>
        <div className='position-absolute need-help px-2 rounded'>Need Help? Chat <b>with us</b></div>
        </div>
    </div>
    </div>
  );
}

export default Navbar;
