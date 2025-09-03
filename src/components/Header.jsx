import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'portfolio', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition <= offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileNavActive(false);
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <h1 className="sitename">Susmitha Tavva</h1>
        </a>

        <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
            <li><a href="#resume" className={activeSection === 'resume' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('resume'); }}>Resume</a></li>
            <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}>Projects</a></li>
            <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Skills</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
          </ul>
          <i className={`mobile-nav-toggle d-xl-none bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}></i>
        </nav>

        <div className="header-social-links">
          <a href="https://github.com/susmithatavva" className="github" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/susmitha-tavva-897655266/" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          <a href="mailto:susmithatavva84@gmail.com" className="email"><i className="bi bi-envelope"></i></a>
          <a href="tel:+917989876978" className="phone"><i className="bi bi-telephone"></i></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
