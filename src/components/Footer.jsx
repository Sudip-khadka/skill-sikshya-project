import React from 'react'
import Logo from '../assets/logo2.png'
import './styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footerabove">
        <div className="cardFooter">
          <img src={Logo} alt="logo" srcSet="" />
        </div>
        <div className="cardFooter"></div>
        <div className="cardFooter"></div>
        <div className="cardFooter"></div>
      </div>
    </div>
  )
}

export default Footer
