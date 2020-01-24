import React from "react";
import './styles/project.css'

export const Projects = ({children, title, link, href}) => (
  <div className="project-container">
      <h1 className='project-title'>{title}</h1>
 
   {children}
   <p>{link}</p>
  
  </div>
);
export default Projects;
