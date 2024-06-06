import React from 'react'
import './styles/ContactUs.css'

function ContactUs() {
  return (
    <div className='contact' id='contact'>
        <div className="texta">
        <span className="colored">- Reach Out to Us</span>
        <h1><span className="colored underlined">Connect</span> With Us</h1>
        <p style={{color:'#555555'}}> Fill out the form below, and we'll get back to you as soon as possible."</p>
        </div>
      <form action="" className='contactform'>
         <div className="firstrow">
         <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder='Sudip Khadka' required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder='ksudip0123@gmail.com' required />
        </div>
        </div>
        <div className="secondrow">
            <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder='981845****' required />
            </div>
            <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder='Service Name' required />
            </div>
        </div>
         
         <div className="thirdrow">
            <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder='Kindly explain your needed service you are interested in...' required></textarea>
            </div>
         </div>
        <button type="submit" className="button">Get In Touch</button>
      </form>
    </div>
  )
}

export default ContactUs
