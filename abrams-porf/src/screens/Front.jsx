import React, { Component } from "react";
import "./styles/front.css";
import { Link } from "react-scroll";
import Footer from "../screens/Footer";
import Nav from "../components/Nav";
import fullProfile from "../images/fullProfile.png";
import blueArrow from "../images/blueArrow.png";
import name from '../images/name.png'
import gameGenius from '../images/gameGenius.png'
import coursegif from '../images/coursegif.gif'
import gameg from '../images/gameg.gif'
import courseReview from "../images/courseReview.png";
import Projects from "../components/shared/Projects";
// import { Player } from "video-react";

class Front extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="front-container">
          <img
            src={fullProfile}
            className="profile-pic"
            alt="profile-pic"
          ></img>
          <div className="about-container">
            <img alt='chrisabrams' className='name-image' src={name}></img>
            <h3 className='about-desc'>Full-Stack Developer/Sport Marketer</h3>
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
              to="first-proj"
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

       
<div className='projects' id="first-proj">
<h1 className='recents'>Recent Projects</h1>

        <Projects title="course.re:view" className="golf-review">
          <img
            className="project-pic"
            src={coursegif}
            alt="course-review"
          ></img>
          <Link
            className="proj-link"
            href="https://abramsc32.github.io/golf-review/index.html"
          >
            Check Out course.re:view
          </Link>
        </Projects>


         <Projects title="Game Genius" className="game-genius">
          <img
            className="project-pic"
            src={gameg}
            alt="game-genius"
          ></img>
          <Link
            className="proj-link"
            href="http://shiny-cream.surge.sh/"
          >
            Check Out Game Genius
          </Link>
        </Projects>

        </div>







        {/* <Player
            playsInline
            className='first'
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          /> */}

        <Footer />
      </>
    );
  }
}

export default Front;
