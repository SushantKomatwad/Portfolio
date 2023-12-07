import React, { useEffect } from 'react'
import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faSchool } from '@fortawesome/free-solid-svg-icons';


const Experience = () => {

    useEffect(() => {
        const educationElements = document.querySelectorAll('.education');
    
        const rotateElements = () => {
          educationElements.forEach((element) => {
            element.classList.toggle('rotate');
          });
        };
    
        const rotationInterval = setInterval(rotateElements, 2000);
    
        return () => {
          clearInterval(rotationInterval);
        };
      }, []);
  return (
    <div className="experience" id='Experiences'>
                  <h1>Education</h1>
                  <h2>Details</h2>
      <div className="education-container">
            <div className="education">
            <div className="new_circle" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.9)", color:"darkkhaki"}}>78.85 %</div>
            <span style={{color : "#5b96a9"}}>
            <FontAwesomeIcon icon={faUniversity} /> Dr. Babasaheb Ambedkar</span>
            <span style={{color : "#f19602"}}>Technological University</span>
        </div>
        <div className="education">
            <div className="new_circle" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.9)" ,color:"darkkhaki"}}>76.77 %</div>
            <span style={{color : "#5b96a9"}}> <FontAwesomeIcon icon={faGraduationCap} />Rajmata Jijamata</span>
            <span style={{color : "#f19602"}}>Science College</span>
        </div>
        <div className="education">
            <div className="new_circle" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.9)" ,color:"darkkhaki"}}>88.20%</div>
            <span style={{color : "#5b96a9"}}>    <FontAwesomeIcon icon={faSchool} /> Shri Deshikendra</span>
            <span style={{color : "#f19602"}}>High School</span>
        </div>
        
    </div>
  </div>
  )
}

export default Experience