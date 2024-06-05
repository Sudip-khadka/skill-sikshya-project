import React from 'react'
import Logo from '../assets/logo.png'
import './styles/Navbar.css'

function Navbar() {
  return (
   <nav>
    <div className="logo">
        <img src={Logo} alt='logo'/>
    </div>
    <div className="middle">
        <a href='#home'>Home</a>
        <a href='#home'>About Us</a>
        <a href='#home'>FAQ</a>
        <a href='#home'>Contact Us</a>
    </div>
    <div className="right">
        <button type="button">Download Now</button>
    </div>
   </nav>
  )
}

export default Navbar
