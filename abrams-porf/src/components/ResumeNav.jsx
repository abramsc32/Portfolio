import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./shared/Button";

class ResumeNav extends React.Component {
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


      </nav>
    );
  };
  renderNavModal = () => {
    if (this.state.modal) {
      return (
        <div className="hamburger-modal">
          <div className="hamburger-modal-container">
          <NavLink className='resume-home' exact to="/"> Home </NavLink>


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
export default ResumeNav;
