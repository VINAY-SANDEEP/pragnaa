import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Service from './components/Service';
import AboutUs from './components/AboutUs';
import InstructorPage from './components/InstructorPage';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Service />
              <AboutUs />
              <InstructorPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
