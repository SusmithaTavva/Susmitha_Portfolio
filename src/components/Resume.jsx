import React from 'react';

const Resume = () => {
  const workExperience = [
    {
      company: 'ASK-HUB',
      period: 'Jan - June 2025',
      position: 'Front End Developer',
      description: 'Specialized in frontend development with focus on creating responsive and interactive user interfaces using modern web technologies.',
      responsibilities: [
        'Full-Feature Development from Design to Implementation: Spearheaded the end-to-end development of user interfaces by converting provided HTML templates and Figma design mockups into dynamic, interactive web pages.',
        'Engineered single-page applications (SPAs) utilizing React.js and Vite.js to ensure a fast, efficient, and scalable development process.',
        'Developed highly responsive and accessible components that delivered a seamless user experience across all device platforms, including desktops, tablets, and mobile phones.',
        'Provided crucial backend support by collaborating with the backend team to integrate frontend components with RESTful APIs and services.'
      ]
    },
    {
      company: 'Bharat Intern',
      period: 'May - July 2024',
      position: 'Full Stack Development Intern',
      description: 'Virtual internship focused on full-stack web development with hands-on experience in modern technologies.',
      responsibilities: [
        'Frontend Development: Gained hands-on experience in building responsive user interfaces using HTML, CSS, and JavaScript, and explored modern frontend frameworks like React.js to enhance user experience.',
        'Backend Development: Learned how to create RESTful APIs and handle server-side logic using Node.js and Express.js, along with managing data using MongoDB or other databases.',
        'Project Deployment: Understood the process of integrating frontend and backend, performing CRUD operations, and deploying full stack web applications on platforms like GitHub Pages for real-world accessibility.'
      ]
    }
  ];

  const education = [
    {
      institution: 'Parul University',
      period: '2022 - 2026',
      degree: 'B.Tech in Computer Science and Engineering (AI and DS)',
      description: 'CGPA: 8.21',
      details: 'Currently pursuing Bachelor of Technology in Computer Science Engineering with specialization in Artificial Intelligence and Data Science.'
    },
    {
      institution: 'Sri Viswa IIT and Medical Academy',
      period: '2020 - 2022',
      degree: 'Board Of Intermediate Education',
      description: 'CGPA: 8.7'
    },
    {
      institution: 'Sree Vidyanjali High School',
      period: '2019 - 2020',
      degree: 'Board Of Secondary Education',
      description: 'CGPA: 9.7'
    }
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p>I've crafted my resume to reflect my journey as a full-stack developer and UI/UX enthusiast, blending technical expertise with a passion for clean, user-centric design.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-12">
            <div className="resume-wrapper">
              <div className="resume-block" data-aos="fade-up">
                <h2>Work Experience</h2>
                <p className="lead">Hands-on experience building web applications during internships, collaborating with teams to deliver functional and user-friendly solutions while refining my technical skills.</p>

                <div className="timeline">
                  {workExperience.map((job, index) => (
                    <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={200 + (index * 100)}>
                      <div className="timeline-left">
                        <h4 className="company">{job.company}</h4>
                        <span className="period">{job.period}</span>
                      </div>
                      <div className="timeline-dot"></div>
                      <div className="timeline-right">
                        <h3 className="position">{job.position}</h3>
                        <p className="description">{job.description}</p>
                        <ul>
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="resume-block" data-aos="fade-up" data-aos-delay="100">
                <h2>Education</h2>
                <p className="lead">Strong academic foundation in Computer Science and Engineering with focus on Artificial Intelligence and Data Science.</p>

                <div className="timeline">
                  {education.map((edu, index) => (
                    <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={200 + (index * 100)}>
                      <div className="timeline-left">
                        <h4 className="company">{edu.institution}</h4>
                        <span className="period">{edu.period}</span>
                      </div>
                      <div className="timeline-dot"></div>
                      <div className="timeline-right">
                        <h3 className="position">{edu.degree}</h3>
                        <p className="description">{edu.description}</p>
                        {edu.details && <p className="description">{edu.details}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
