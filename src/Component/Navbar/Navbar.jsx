import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
           <div className="n-name">Sushant Komatwad
           </div>
           <Toggle />
        </div>
        <div className="n-right">
           <div className="n-list">
              <ul>
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeclass'>
                <li>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} >
                <li>Services</li>
                </Link>
                <Link spy={true} to='Experiences' smooth={true} >
                <li>Experiences</li>
                </Link>
               </ul>
           </div>
          <button className='btn'>
          <Link spy={true} to='Contact' smooth={true} >
            Contact
            </Link>
          </button> 
        </div>
    </div>
  )
}

export default Navbar