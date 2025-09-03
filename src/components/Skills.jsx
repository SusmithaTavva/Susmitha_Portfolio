import React, { useEffect } from 'react';

const Skills = () => {
  const skills = [
    { name: 'Java', description: 'Building high-performance, cross-platform applications with strong OOP principles.', percentage: 85 },
    { name: 'Python', description: 'Writing clean, efficient, and versatile code for web and automation tasks.', percentage: 80 },
    { name: 'JavaScript', description: 'Bringing interactivity and dynamic functionality to web applications.', percentage: 75 },
    { name: 'ReactJS', description: 'Building fast, reusable, and interfaces with a powerful component-based library.', percentage: 70 },
    { name: 'NodeJS', description: 'Developing scalable server-side applications using JavaScript.', percentage: 65 },
    { name: 'MongoDB', description: 'Working with NoSQL databases for flexible and efficient data storage.', percentage: 70 },
    { name: 'MySQL', description: 'Managing relational databases and performing complex queries.', percentage: 75 },
    { name: 'HTML/CSS', description: 'Creating responsive and modern web interfaces with clean markup and styling.', percentage: 85 },
    { name: 'Git & GitHub', description: 'Version control and collaboration for efficient code management.', percentage: 80 },
    { name: 'Django', description: 'Building robust web applications with Python\'s powerful framework.', percentage: 65 },
    { name: 'Spring Boot', description: 'Developing enterprise-grade applications with Java Spring framework.', percentage: 70 },
    { name: 'Azure', description: 'Cloud computing and deployment using Microsoft Azure platform.', percentage: 60 }
  ];

  useEffect(() => {
    const animateSkills = () => {
      const skillBoxes = document.querySelectorAll('.skill-box');
      skillBoxes.forEach((box, index) => {
        const progressBar = box.querySelector('.progress-bar');
        const percentage = skills[index].percentage;
        
        setTimeout(() => {
          if (progressBar) {
            progressBar.style.width = percentage + '%';
          }
        }, index * 100);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.unobserve(entry.target);
        }
      });
    });

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 skills-animation">
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="skill-box">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                <span className="text-end d-block">{skill.percentage}%</span>
                <div className="progress">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    aria-valuenow={skill.percentage} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
