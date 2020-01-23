import React, { Component } from "react";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Footer from '../screens/Footer';
import NavBar from "../components/NavBar";
class Front extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <About />
      <Contact />
      <Footer/>

    </>
    );
  }
}

export default Front