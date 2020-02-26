import React, { Component } from "react";
import "./styles/front.css";
import { Link } from "react-scroll";
import Nav from "../components/Nav";
import NavBlue from '../components/NavBlue'
import roundProfile from "../images/roundProfile.png";
import blueArrow from "../images/blueArrow.png";
import name from "../images/name.png";
import courseRe from '../images/courseRe.gif';
import gameG from '../images/gameG.gif';
import Projects from "../components/shared/Projects";
import ContactForm from './ContactForm';
import Blog from './Blog';

class Front extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="front-container" id="front">
          <div className='pic-info'>
            
          <img
            src={roundProfile}
            className="profile-pic"
            alt="profile-pic"
          ></img>
        <div className='links-andInfo'>
        <NavBlue/>
        </div>
          </div>
          <div className="about-container">
            <img alt="chrisabrams" className="name-image" src={name}></img>
            <h3 className="about-desc">Full-Stack Developer/Sport Marketer</h3>
            <p className="about-text">
              Well-rounded full-stack developer coming from the sport analytics marketing sector
              with knowledge of numerous programming languages. Excels in
              independent or collaborative team-based projects. Knowledgeable in
              traditional and digital marketing tactics.
            </p>
            <p className="more-about">More About Chris</p>

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

        <div className="projects" id="first-proj">
          <h1 className="recents">Recent Projects</h1>

          <Projects title="course.re:view" className="golf-review">
            <img
              className="project-pic"
              src={courseRe}
              alt="course-review"
            ></img>
            <p>A golf course review blog that records past golfing trips. Site was built using HTML, CSS, and Javascript. </p>

            <form
              action="https://abramsc32.github.io/golf-review/index.html"
              target="_blank"
            >
              <button type="submit">Check Out course.re:view</button>
            </form>
          </Projects>

          <Projects title="Game Genius" className="game-genius">
            <img className="project-pic" src={gameG} alt="game-genius"></img>
            <p>Full CRUD application with user authentication that stores video games from a Steam api. Users are able to look through multiple game genres and add them to their favorites list under their profile. </p>

            <form action="http://shiny-cream.surge.sh/" target="_blank">
              <button type="submit">Check Out Game Genius</button>
            </form>

          </Projects>
        </div>
<Blog/>
<ContactForm/>
    
      </>
    );
  }
}

export default Front;
