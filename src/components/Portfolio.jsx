import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      id: 1,
      category: 'fullstack',
      filter: 'filter-fullstack',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEdYaXX7E3onfYIDb69IgkbJ-tM5WmiTAlNS3hXubg5tORX9OYKa6a9544ANTRA3sqgth44BrM7ptVcd9bEd1aN5RiOplndR9KqHRz72vG5nNIGk8SM5pOH1UCetBFUYLS5GSGxg8fBmnUbiDSlNKsvFAc43cnD_gm_Lx9yfIk7haNfZflvUYsOT3DFPzs/s1280/BANK%20Overview.png',
      title: 'Secure Online Banking Portal',
      categoryLabel: 'Full Stack Development',
      description: 'Tech Stack: HTML, CSS, JavaScript (Frontend) and PHP, MySQL (Backend) with XAMPP for local server management.',
      features: [
        'Core banking features: account creation, deletion, money transactions',
        'Map-based ATM locator for nearby banking services',
        'Secure MySQL database for user accounts and transactions',
        'User-friendly interface with smooth navigation'
      ]
    },
    {
      id: 2,
      category: 'finance',
      filter: 'filter-finance',
      image: 'https://s3.envato.com/files/480881279/Costy%20-%20Simple%20Money%20Tracker%20App%20-%20Budget%20Planner%20-%20Expense%20Tracker%20-%20Spending%20Tracker%20-%20Expenses%20(1).jpg',
      title: 'Web Based Money Tracker',
      categoryLabel: 'Finance Application',
      description: 'Tech Stack: HTML, CSS, JavaScript',
      features: [
        'Efficiently record and categorize daily expenditures',
        'Real-time insights and spending trends',
        'Budget management for better financial planning',
        'Interactive charts and visualizations'
      ]
    }
  ];

  const filters = [
    { id: '*', label: 'All Projects' },
    { id: '.filter-web', label: 'Web Development' },
    { id: '.filter-fullstack', label: 'Full Stack' },
    { id: '.filter-finance', label: 'Finance Apps' }
  ];

  useEffect(() => {
    if (activeFilter === '*') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.filter === activeFilter.replace('.', ''));
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p>Showcasing my personal projects that demonstrate my skills in full-stack development, web design, and problem-solving abilities.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
          <ul className="portfolio-filters">
            {filters.map((filter) => (
              <li 
                key={filter.id}
                className={activeFilter === filter.id ? 'filter-active' : ''}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="row g-4" data-aos="fade-up" data-aos-delay="300">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="col-lg-6 col-md-6 portfolio-item" data-aos="fade-up" data-aos-delay={400 + (index * 100)}>
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={project.image} className="img-fluid" alt={project.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a href={project.image} className="preview-link" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href="#" className="details-link">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">{project.categoryLabel}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-features">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
