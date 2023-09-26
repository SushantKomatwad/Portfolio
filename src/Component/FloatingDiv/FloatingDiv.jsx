import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = () => {
  return (
    <div className='floating'>
        <img src="https://media.istockphoto.com/id/854565082/photo/cool-emoji-isolated-on-white-background-smiling-emoticon-with-sunglasses.jpg?s=612x612&w=0&k=20&c=gcPfYWE6Ms08StfoH77KcHOcy4q4fnrhytD22u7GbCs=" alt="" style={{ width: '60px', height: '60px', objectFit: 'cover',marginTop :'180px' }}  />
        <img src="https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2018/10/Blog_Full-stack-dev.jpg" alt="" style={{ width: '360px', height: '160px', objectFit: 'cover', marginTop:"350px", borderRadius:"40px"}} />
    </div>

  )
}

export default FloatingDiv