import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import Resume from './Sushant_Komatwad_Resume_.pdf'



const Services = () => {

    const emojiImage = process.env.PUBLIC_URL + './HeartEmoji.png'

    const emojiGogle = process.env.PUBLIC_URL + './emojigogle.png'

    const smileImage = process.env.PUBLIC_URL + './smileImage.jpg'


  return (
    <div className='services' >
          <div className="awesome">
           <span>My Awesome</span>
           <span>Services</span>
           <span>
            Do Daily Projects For Practice Purpose
           <br />
           Learn Daily New Technology ++
           </span>
           <a href={Resume} > 
            <button className='btn s-button'>Download CV</button>
           </a>
        
           <div className='blur s-blur' style={{background :'#ABF1FF94'}}></div>

           <div className='blur s-blur3' style={{background :'#ABF1FF94'}}></div>
          </div>
          <div className="cards" style={{ marginLeft: '12rem' }}>

             <div style={{left:'14rem'}}>
                <Card
                emoji ={emojiImage}
                heading = {"Frontend"}
                detail = {"HTML5 , CSS3 , JS ,   React"} 
                />
             </div>

             <div style={{top:'12rem', left:'-4rem'}}>
                <Card
                emoji ={emojiGogle}
                heading = {"Backend"}
                detail = {"Java , SpringBoot , Hibernate , Sql"} 
                />
             </div>

             <div style={{top:'19rem', left:'12rem'}}>
                <Card
                emoji ={smileImage}
                heading = {"Projects"}
                detail = {"Train Management System "} 
                />
             </div>


          </div>
    </div>
  )
}

export default Services