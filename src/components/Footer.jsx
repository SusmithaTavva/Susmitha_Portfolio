import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>Susmitha Tavva</h3>
              <p>
                B.Tech Computer Science Engineering-AI Student<br />
                Parul University, Vadodara, Gujarat<br /><br />
                <strong>Phone:</strong> +91-7989876978<br />
                <strong>Email:</strong> susmithatavva84@gmail.com<br />
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Skills & Expertise</h4>
            <ul>
              <li><a href="#skills">Programming Languages</a></li>
              <li><a href="#skills">Web Development</a></li>
              <li><a href="#skills">Database Management</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#portfolio">Projects</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Connect With Me</h4>
            <p>Let's discuss opportunities and collaborations!</p>
            <div className="social-links">
              <a href="https://github.com/susmithatavva" className="github" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/susmitha-tavva-897655266/" className="linkedin" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:susmithatavva84@gmail.com" className="email">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="tel:+917989876978" className="phone">
                <i className="bi bi-telephone"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="copyright text-center">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Susmitha Tavva</strong> <span>All Rights Reserved</span> | <span id="current-year">2025</span></p>
        </div>
        <div className="credits text-center">
          <p>Motivated and detail-oriented undergraduate seeking internship opportunities</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
