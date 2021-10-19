import "./Footer.css";
import {
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Footer = () => {
  return (
    <div className='bg-dark text-white mt-12'>
      <div className='footer-container container'>
        <div className='footer-section'>
          <h3>Opening Hour </h3>
          <li>
            <h5>Mon-Fri</h5>
          </li>
          <li>
            <p>8:00am to 6:00pm </p>
          </li>
          <li>
            <h5>Sat - Sun</h5>
          </li>
          <li>
            <p>10:00am to 7:00pm</p>
          </li>
        </div>

        <div className='footer-section'>
          <h3>Medical Center</h3>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#team'>services</a>
          </li>
          <li>
            <a href='#about'>Register</a>
          </li>
        </div>

        <div className=' footer-section'>
          <h4>Social Media</h4>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> Twitter
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github
            </a>
          </li>
        </div>
      </div>
      <p>Copyright 2021- @ All right reserve Shahobaj iefan </p>
    </div>
  );
};

export default Footer;
