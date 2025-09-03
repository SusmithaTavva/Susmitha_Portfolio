import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'bi bi-code-slash',
      title: 'Programming Languages',
      description: 'Java, Python, C, JavaScript, HTML/CSS with strong foundation in object-oriented programming and data structures.'
    },
    {
      icon: 'bi bi-layers',
      title: 'Frameworks & Libraries',
      description: 'ReactJS, Django, Spring Boot, Python Libraries for building modern web applications and backend services.'
    },
    {
      icon: 'bi bi-database',
      title: 'Databases & Cloud',
      description: 'MongoDB, MySQL, Microsoft Azure for data management and cloud deployment solutions.'
    },
    {
      icon: 'bi bi-tools',
      title: 'Development Tools',
      description: 'Node.js, VS Code, Git, GitHub for version control and collaborative development workflows.'
    }
  ];

  const handleSkillsClick = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Technical Skills & Interests</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p>Comprehensive technical skills and areas of expertise in software development, web technologies, and artificial intelligence.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-bold mb-4 servies-title">Languages, Frameworks & Tools</h2>
            <p className="mb-4">Proficient in multiple programming languages, modern frameworks, and development tools for building robust and scalable applications.</p>
            <a href="#skills" className="btn btn-outline-primary" onClick={(e) => { e.preventDefault(); handleSkillsClick(); }}>View Skills</a>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={200 + (index * 100)}>
                  <div className="service-item">
                    <i className={`${service.icon} icon`}></i>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
