import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import linkedin from "../images/linkedin.png";
import Octocat from "../images/Octocat.png";
import resumeicon from "../images/resumeicon.png";

import "./styles/nav.css";

class NavBlue extends Component {
  state = {};
  render() {
    return (
      <>
      <div className='contact-text'>
      <h2 >Contact Details</h2>
      <h1>Email</h1>
      <p> abramsc32@gmail.com</p>

      <h1>Phone Number</h1>

      <p> (914) 450-6557 </p>
      <h1>Location</h1>

      <p> Greater New York Area</p>

      </div>
        <div className="nav-bar">

          <NavLink className="active-link" activeClass="active" to="resume">
          <img className="social-media" src={resumeicon} alt="linkedin"></img>
          </NavLink>
          <a className="" target="_blank" rel="noopener noreferrer" href="https://github.com/abramsc32">
              <img className="social-media" src={Octocat} alt="github"></img>
            </a>
            <a className="" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chrisabrams722/">
              <img className="social-media" src={linkedin} alt="linkedin"></img>
            </a>
          
        <div className="my-contact">
        </div>
        </div>
      </>
    );
  }
}

export default NavBlue;
