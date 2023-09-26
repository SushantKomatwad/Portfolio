import React, { useEffect, useState } from 'react'
import './Toggle.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const Toggle = () => {

    const[isDarkMode , setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
      };

      useEffect(() => {
        
        if (isDarkMode) {
          document.body.classList.add('dark-theme');
          document.body.classList.remove('bright-theme');
        } else {
          document.body.classList.remove('dark-theme');
          document.body.classList.add('bright-theme');
        }
      }, [isDarkMode]);

  return (
    <div className={`toggle ${isDarkMode ? 'dark-theme' : 'bright-theme'}`}>
    {isDarkMode ? (
      <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} />
    ) : (
      <FontAwesomeIcon icon={faSun} onClick={toggleTheme} />
    )}
  </div>
  )
}

export default Toggle