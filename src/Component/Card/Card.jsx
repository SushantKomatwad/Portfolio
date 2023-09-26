import React from 'react'
import './Card.css'

const Card = ({emoji , heading , detail}) => {
  return (
    <div>
        <div className="card">
            <img src={emoji} alt="" style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius:"40px"}} />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className='c-button'>LEARN MORE</button>
        </div>
    </div>
  )
}

export default Card