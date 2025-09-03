import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Update footer year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  // Add scroll-to-top functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        if (window.scrollY > 100) {
          scrollTop.classList.add('active');
        } else {
          scrollTop.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Certifications />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
