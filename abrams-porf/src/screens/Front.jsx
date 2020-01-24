import React, { Component } from "react";
import Contact from "../screens/Contact";
import { Link } from "react-scroll";
import Footer from "../screens/Footer";
import Nav from "../components/Nav";
import fullProfile from "../images/fullProfile.png";
import blueArrow from "../images/blueArrow.png";
import "./styles/front.css";
import Projects from "../components/shared/Projects";

class Front extends Component {
  render() {
    return (
      <>
        <Nav/>
        <div className="front-container">
          <img
            src={fullProfile}
            className="profile-pic"
            alt="profile-pic"
          ></img>
          <div className="about-container">
            <p className="about-text">
              Well-rounded sports analytics marketer and full-stack developer
              with knowledge of all major sports leagues. Excels in independent
              or collaborative team-based projects.Knowledgeable in traditional
              and digital marketing tactics.
            </p>
          <p>More About Chris</p>
           
              <Link
                className="active-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              > 
              <div class="downArrow bounce">
              <img alt="blue arrow" src={blueArrow} />
              </div>

              </Link>
          </div>
        </div>


        <Projects
        title='Course.review'
        className='golf-review'
        link='https://abramsc32.github.io/golf-review/index.html'
      
        />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Front;
