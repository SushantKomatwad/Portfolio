import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub , faInstagram , faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hello..! I Am</span>
                <span>Sushant Komatwad</span>
                <span>Full Stack Developer With Deep Knowledge</span>
            </div>

            <button className='btn'>
               Hire Me
            </button>

            <div className="i-icon">
            <FontAwesomeIcon icon={faGithub} size="4x" />
            <FontAwesomeIcon icon={faInstagram} size="4x" />
           <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </div>
        </div>
        <div className="i-right">
           <div className="circle">
           <img src="sushant_komatwad_.jpeg" alt="Image" className="circle-image" />
           </div>

           <div>
            <FloatingDiv />
           </div>

           <div className='blur' style={{background:"rgb(238 210 255"}}>
           </div>
           {/* <div className='blur'
            style={{
              background:"#C1F5FF",
              top : '17rem',
              width :'21rem',
              height :'11rem',
              left :'-9rem'
            }}
           >
           </div> */}

        </div>
    </div>
  )
}

export default Intro