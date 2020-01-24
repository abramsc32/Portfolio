import React, { Component } from "react";
import "./styles/contact.css";
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

import { Link } from "react-scroll";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-section" id="contact">
        <div className="form-container">
            <h4>Contact Me</h4>
          <form
            className="form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
              <div className='input-wrap'>
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            </div>
            <div className='input-wrap'>

            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            </div>
           
            <div className='input-wrap'>

            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            </div>
            <p>
              <button type="submit">Send</button>
            </p>
            <div className='social-media-icons'>
            <Link href='https://www.linkedin.com/in/chrisabrams722/'>
            <img className='social-media' src={linkedin} alt='linkedin'></img>
            </Link>
            <Link href='https://github.com/abramsc32'>
            <img className='social-media' src={github} alt='github'></img>
            </Link>
            </div>
           
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;
