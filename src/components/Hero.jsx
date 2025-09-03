import React from 'react';

const Hero = () => {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center content">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h2>Passionate Full Stack Developer & AI Enthusiast</h2>
            <p className="lead">Motivated and detail-oriented undergraduate seeking opportunities to apply academic knowledge and develop industry-relevant skills. Passionate about innovation, problem-solving, and collaborative teamwork.</p>
            <div className="cta-buttons" data-aos="fade-up" data-aos-delay="300">
              <a href="#portfolio" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}>View My Projects</a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Let's Connect</a>
            </div>
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img src="/POD-pic.png" alt="Susmitha Tavva" className="img-fluid" data-aos="zoom-out" data-aos-delay="300" />
              <div className="shape-1"></div>
              <div className="shape-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
