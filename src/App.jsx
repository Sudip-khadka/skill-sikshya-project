import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Cnex from './components/Cnex';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import Community from './components/Community';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const backToTopButton = document.querySelector('.back-to-top');
    const handleScroll = () => {
      if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <>
      <Navbar />
      <div className="home-container">
        <Home />
        <div className="back-to-top">
          <a href="#nav" onClick={handleSmoothScroll}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FF785A" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
          </svg></a>
        </div>
      </div>
      <AboutUs />
      <Cnex />
      <Testimonial />
      <Faq />
      <Community />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
