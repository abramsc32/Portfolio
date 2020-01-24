import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./shared/Button";

class Nav extends React.Component {
  state = {
    modal: false
  };
  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  renderLinks = () => {
    return (
      <nav>
        <Button
          title={<GiHamburgerMenu size={30} />}
          className="open-modal"
          onClick={() => this.handleModal()}
        />
        <NavLink exact to="/"></NavLink>
      </nav>
    );
  };
  renderNavModal = () => {
    if (this.state.modal) {
      return (
        <div className="hamburger-modal">
          <div className="hamburger-modal-container">
          <Link
              activeClass="active"
              to="front"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => this.handleModal()}>
                Home
            </Link>

            <Link
              activeClass="active"
              to="first-proj"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => this.handleModal()}>
                Projects
            </Link>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => this.handleModal()}>
                Contact
            </Link>

          </div>
          <div className="overlay"></div>
        </div>
      );
    }
  };
  render() {
    return (
      <>
      <div className='ham-container'>
        {this.renderLinks()}
        {this.renderNavModal()}
        </div>
      </>
    );
  }
}
export default Nav;
