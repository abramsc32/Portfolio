import React, {Component} from 'react'
import ResumeNav from "../components/ResumeNav";

import chrisResume from '../images/chrisResume.png'

import './styles/resume.css'

class Resume extends Component {
    state = {};
    render(){
        return(
            <>
            <ResumeNav/>
        <div className='resume-section' id='resume'/>
        <img  alt ="resume" className='resume-pdf'src={chrisResume}></img>
        </>
        )
    }
}
export default Resume