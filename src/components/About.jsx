import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p>Motivated and detail-oriented undergraduate eagerly seeking internship opportunities or placement offers to apply academic knowledge and develop industry-relevant skills.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
            <div className="about-image">
              <img src="/portfolio.png" alt="Susmitha Tavva" className="img-fluid rounded-4" style={{ height: "625px", width: "auto" }}/>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <span className="subtitle">About Me</span>
              <h2>Full Stack Developer &amp; AI Enthusiast</h2>
              <p className="lead mb-4">Passionate about innovation, problem-solving, and collaborative teamwork. Committed to continuous learning, enhancing technical expertise, and contributing effectively to organizational success.</p>
              <p className="mb-4">Aspiring to gain hands-on experience and grow into a dynamic professional in the field of Computer Science and Artificial Intelligence.</p>

              <div className="personal-info">
                <div className="row g-4">
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Name</span>
                      <span className="value">Susmitha Tavva</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Phone</span>
                      <span className="value">+91-7989876978</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Email</span>
                      <span className="value">susmithatavva84@gmail.com</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Education</span>
                      <span className="value">B.Tech CSE-AI</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">University</span>
                      <span className="value">Parul University</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="info-item">
                      <span className="label">Location</span>
                      <span className="value">Vadodara, Gujarat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
