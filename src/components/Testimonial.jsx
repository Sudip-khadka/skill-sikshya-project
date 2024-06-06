import React, { useRef } from 'react';
import './styles/Testimonial.css';
import Profile from '../assets/testimonialprofile.png';
import Testimonial1 from '../assets/testimonial1.jpeg';
import Testimonial2 from '../assets/testimonial2.jpeg';

function Testimonial() {
  const testimonialContainerRef = useRef(null);

  const scrollLeft = () => {
    testimonialContainerRef.current.scrollBy({ left: -testimonialContainerRef.current.offsetWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    testimonialContainerRef.current.scrollBy({ left: testimonialContainerRef.current.offsetWidth, behavior: 'smooth' });
  };

  return (
    <div className='testimonial'>
      <p className="colored underlined">- Testimonial</p>
      <div className="slider">
        <div className="sliderleft">
          <h1>What Our <span className="colored underlined">Customers Say</span></h1>
        </div>
        <div className="sliderright">
          <div className="slidetestimonialleft" onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FF785A" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
          </div>
          <div className="slidetestimonialright" onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FF785A" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="testimonialContainers" ref={testimonialContainerRef}>
        <div className="testimonialContainer">
          <img src={Testimonial1} alt="" />
          <div className="testimonialCard">
            <div className="top">
              <img src={Profile} alt="testimonial giver" />
              <h6>“They did an amazing work for our home”</h6>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien</p>
            <span className="colored">- JOHN CARTER, NEW YORK</span>
          </div>
        </div>
        <div className="testimonialContainer">
          <img src={Testimonial2} alt="" />
          <div className="testimonialCard">
            <div className="top">
              <img src={Profile} alt="testimonial giver" />
              <h6>“They did an amazing work for our home”</h6>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien</p>
            <span className="colored">- JOHN CARTER, NEW YORK</span>
          </div>
        </div>
        <div className="testimonialContainer">
          <img src={Testimonial2} alt="" />
          <div className="testimonialCard">
            <div className="top">
              <img src={Profile} alt="testimonial giver" />
              <h6>“They did an amazing work for our home”</h6>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien</p>
            <span className="colored">- JOHN CARTER, NEW YORK</span>
          </div>
        </div>
        <div className="testimonialContainer">
          <img src={Testimonial2} alt="" />
          <div className="testimonialCard">
            <div className="top">
              <img src={Profile} alt="testimonial giver" />
              <h6>“They did an amazing work for our home”</h6>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien</p>
            <span className="colored">- JOHN CARTER, NEW YORK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
