import React, {Component} from 'react'
// import { Link} from 'react-scroll'
// import { NavLink } from 'react-router-dom'
// import profileCircle from '../images/profileCircle.png'
import './styles/nav.css'

 class NavBar extends Component {
    state = {};
    render(){
        return (
        <>
    {/* <img alt ='profile' className ='profile' src ={profileCircle}></img> */}

        {/* <div className='nav-bar'>
        <Link
        className='active-link'
        activeClass='active'
        to='about'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>   
        About</Link>
     

        <Link
        activeClass='active'
        to='contact'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        Contact</Link>

           <Link
        activeClass='active'
        to='footer'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        >Footer</Link>
  
        <NavLink
        activeClass='active'
        to='/blog'>
        Blog</NavLink> */}
{/* 
  </div> */}
  </>
        )
        
    }
        
}

export default NavBar
