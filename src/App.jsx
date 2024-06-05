
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Cnex from './components/Cnex'
import Testimonial from './components/Testimonial'
import Faq from './components/Faq'
import Community from './components/Community'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <AboutUs/>
      
      <Cnex/>
      <Testimonial/>
      <Faq/>
      <Community/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
