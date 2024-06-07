import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import apple from '../assets/Apple.png';
import android from '../assets/Google.png';
import Rotate1 from '../assets/rotate4.png';
import Rotate2 from '../assets/rotate1.png';
import Rotate3 from '../assets/rotate2.png';
import Rotate4 from '../assets/rotate3.png';
import { motion, AnimatePresence } from "framer-motion";
import Background1 from '../assets/fab8f3baf4759353b5ffc0513cd72614.jpeg'
import Background2 from '../assets/faq.jpeg'
import Background3 from '../assets/testimonial1.jpeg'
import Background4 from '../assets/testimonial2.jpeg'




function Home() {

  const homeText = [
    {
      id: 1,
      heading: `<span class='colored underlined'>Experience</span> the Future of Female Commerce 
with <span class='colored underlined'>Cnex</span>`,
      body: `Order, Preorder, and Book - Your Ultimate Destination for Female Products and Services`,
      backgroundImage:Background1
      },
      {
        id: 2,
        heading: `Where <span class='colored'>Fashion</span> Meets <span class='colored underlined'>Feminity</span>`,
        body: `Cnex, Preorder, and Book `,
        backgroundImage:Background2
    },
    {
      id: 3,
      heading: `Radiate <span class='colored underlined'>Confidence,</span> Radiate Style`,
      body: `Your Ultimate Destination for Female Products and Services`,
      backgroundImage:Background3
    },
    {
      id: 4,
      heading: `<span class='colored underlined'>Fashion</span> <span class='colored'>Redefined</span>`,
      body: `Cnex The Ultimate Destination `,
      backgroundImage:Background4
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % homeText.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [homeText.length]);

  const evenVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1, ease: "easeInOut" }
  };

  const oddVariant = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: { duration: 1, ease: "easeInOut", type: "spring", stiffness: 100, damping: 20 }
  };

    // Determine the background image based on the current index
    const backgroundImages = [
      Background1,
      Background2,
      Background3,
      Background4
    ];

  return (
    <div className='home' id='home' style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}>
      <div className="lefthome">
        <div className="text">
          <AnimatePresence mode='wait'>
            <motion.h1
              key={currentIndex}
              variants={currentIndex % 2 === 0 ? evenVariant : oddVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              dangerouslySetInnerHTML={{ __html: homeText[currentIndex].heading }}
              id={currentIndex % 2 === 0 ? 'evenheading' : 'oddheading'}
            />
          </AnimatePresence>
          <motion.p
            key={currentIndex + '-p'}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {homeText[currentIndex].body}
          </motion.p>
        </div>
        <div className="homeimage">
          <img src={apple} alt="applestore" />
          <img src={android} alt="playstore" />
        </div>
      </div>
      <div className="imageRight">
        <div className="imageRotate">
          <img src={Rotate1} alt="" className='rotate1' />
          <img src={Rotate2} alt="" className='rotate2' />
          <img src={Rotate3} alt="" className='rotate3' />
          <img src={Rotate4} alt="" className='rotate4' />
        </div>
      </div>
    </div>
  );
}

export default Home;
