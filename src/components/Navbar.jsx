import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import './styles/Navbar.css';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          document.querySelectorAll('.middle a').forEach((a) => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${section.id}`) {
              a.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    setShowNav(!showNav);
  };

  return (
    <nav id="nav">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className={`middle ${showNav ? 'show' : ''}`} id="middle">
        <a href="#home">Home</a>
        <a href="#aboutus">About Us</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="right">
        <button type="button">Download Now</button>
        <div className="nav-responsive" id="nav-responsive" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
