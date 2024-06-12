import React from 'react'
import './styles/AboutUs.css'
import Facts from './Facts'
import Image1 from '../assets/aboutImage/Image1.png'
import Image2 from '../assets/aboutImage/Image2.png'
import Image3 from '../assets/aboutImage/Image3.png'
import Image4 from '../assets/aboutImage/Image4.png'
import Image5 from '../assets/aboutImage/Image5.png'
import Image6 from '../assets/aboutImage/Image6.png'
import Image7 from '../assets/aboutImage/Image7.png'
import Image8 from '../assets/aboutImage/Image8.png'
import OurStory from './OurStory'

function AboutUs() {
  return (
    <div className='aboutus' id='aboutus'>
      <Facts/>
      <div className="aboutusElement">
      <span className='colored gap'>&#8212; ABOUT US</span>
      <h1><span className="colored underlined">Pioneering Female</span> &#8212; Centric Solutions for the Modern Women</h1>
    </div>
      <div className="imagecontainers">
            <div className="imageleft">
            <img src={Image1} alt="image1" srcSet="" />
            <img src={Image2} alt="image2" srcSet="" />
            </div>
        <div className="imagemiddle">
            <div className="imagemiddlefirst">
            <img src={Image3} alt="image3" srcSet="" />
            <img src={Image4} alt="image4" srcSet="" />
            </div>
            <img src={Image5} alt="image5" srcSet="" className='lastimage'/>
        </div>
            <div className="imageright">
                <img src={Image6} alt="image6" srcSet="" />
                <img src={Image7} alt="image7" srcSet="" />
                <img src={Image8} alt="image8" srcSet="" />
            </div>
      </div>
      <OurStory/>
      </div>
  )
}

export default AboutUs
