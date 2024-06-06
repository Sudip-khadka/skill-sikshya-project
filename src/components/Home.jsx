import React from 'react'
import './styles/Home.css'
import apple from '../assets/Apple.png'
import android from '../assets/Google.png'
import Rotate1 from '../assets/rotate4.png'
import Rotate2 from '../assets/rotate1.png'
import Rotate3 from '../assets/rotate2.png'
import Rotate4 from '../assets/rotate3.png'

function Home() {
  return (
    <div className='home' id='home'>
      <div className="lefthome">
      <div className="text">
        <h1><span className='colored underlined'>Experience</span> the Future of Female Commerce 
with <span className="colored underlined">Cnex</span> </h1>
<p>Order, Preorder, and Book - Your Ultimate Destination for Female Products and Services</p>
      </div>
      <div className="homeimage">
        <img src={apple} alt="applestore" srcSet="" />
        <img src={android} alt="playstore" srcSet="" />
      </div>
      </div>
      <div className="imageRight">
        <div className="imageRotate">
            <img src={Rotate1} alt="" srcSet="" className='rotate1'/>
            <img src={Rotate2} alt="" srcSet="" className='rotate2'/>
            <img src={Rotate3} alt="" srcSet="" className='rotate3'/>
            <img src={Rotate4} alt="" srcSet="" className='rotate4'/>
        </div>
      </div>
    </div>
  )
}

export default Home
