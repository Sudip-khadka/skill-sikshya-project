import React from 'react'
import apple from '../assets/Apple.png'
import android from '../assets/Google.png'
import './styles/Community.css'

function Community() {
  return (
    <div className='community'>
      <div className="textsimage">
      <h1>Join The <span className="colored underlined">CNEX Community</span> Today!</h1>
      <p>Download CNEX now to explore a world of female-centric products and services, and empower yourself with every purchase and booking</p>
      <div className="imagea">
      <img src={apple} alt="applestore" srcSet="" />
        <img src={android} alt="playstore" srcSet="" />
      </div>
      </div>
    </div>
  )
}

export default Community
