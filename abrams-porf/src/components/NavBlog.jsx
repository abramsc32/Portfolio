import React, {Component} from 'react'
// import { Link} from 'react-scroll'
import { NavLink } from 'react-router-dom'
import profileCircle from '../images/profileCircle.png'
import './styles/nav.css'

 class NavBlog extends Component {
    state = {};
    render(){
        return (
        <>
    <img alt ='profile' className ='profile' src ={profileCircle}></img>

        <div className='nav-bar'>
    <NavLink 
     className='active-link'
     activeClass='active'
     to='front'
     ></NavLink>

  </div>
  </>
        )
        
    }
        
}

export default NavBlog
