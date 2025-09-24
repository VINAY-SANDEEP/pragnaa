import React from 'react'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Service from './components/Service'
import AboutUs from './components/AboutUs'
import InstructorPage from './components/InstructorPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Service/>
    <AboutUs/>
    <InstructorPage/>
    <Footer/>
    </>
  )
}

export default App