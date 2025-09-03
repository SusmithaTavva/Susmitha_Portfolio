import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      organization: 'NPTEL-Swayam',
      title: 'Computer Networks And Internet Protocol',
      date: 'January - April 2024',
      description: 'Comprehensive understanding of computer networking fundamentals and internet protocols.'
    },
    {
      organization: 'Salesforce',
      title: 'AI Associate',
      date: 'April 2025',
      description: 'Certification in artificial intelligence fundamentals and Salesforce AI capabilities.'
    },
    {
      organization: 'Salesforce',
      title: 'AgentForce Specialist',
      date: 'June 2025',
      description: 'Specialized certification in Salesforce AgentForce platform and automation.'
    },
    {
      organization: 'Naukri Campus',
      title: 'AINCAT-All India Naukri Aptitude Test',
      date: 'April 2025',
      description: 'National level aptitude test demonstrating problem-solving and analytical skills.'
    },
    {
      organization: 'Infosys Spring Board',
      title: 'Database & MySQL',
      date: 'September 2023',
      description: 'Comprehensive training in database management systems and MySQL implementation.'
    }
  ];

  return (
    <section id="certifications" className="certifications section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Certifications</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p>Professional certifications and achievements that demonstrate my commitment to continuous learning and skill development.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={200 + (index * 100)}>
              <div className="certification-card">
                <div className="certification-content">
                  <h3>{cert.organization}</h3>
                  <h4>{cert.title}</h4>
                  <p className="date">{cert.date}</p>
                  <p>{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
