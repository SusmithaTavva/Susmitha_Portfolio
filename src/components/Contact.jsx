import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSent(false);

    // Simulate form submission with a delay
    setTimeout(() => {
      // For demo purposes, we'll always show success
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
      
      // Reset sent message after 5 seconds
      setTimeout(() => setSent(false), 5000);
    }, 1500);

    // If you want to use a real form service, uncomment and modify the code below:
    /*
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <section id="contact" className="contact section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="200">
              <div className="section-category mb-3">Contact</div>
              <h2 className="display-5 mb-4">Let's Connect and Build Something Amazing Together</h2>
              <p className="lead mb-4">I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.</p>

              <div className="contact-info mt-5">
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-envelope-at me-3"></i>
                  <span>susmithatavva84@gmail.com</span>
                </div>

                <div className="info-item d-flex mb-3">
                  <i className="bi bi-telephone me-3"></i>
                  <span>+91-7989876978</span>
                </div>

                <div className="info-item d-flex mb-4">
                  <i className="bi bi-geo-alt me-3"></i>
                  <span>Vadodara, Gujarat, India</span>
                </div>

                <div className="social-links mt-4">
                  <a href="https://github.com/susmithatavva" className="me-3" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/susmitha-tavva-897655266/" className="me-3" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="mailto:susmithatavva84@gmail.com" className="me-3">
                    <i className="bi bi-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit} className="php-email-form">
                  <div className="row gy-4">
                    <div className="col-12">
                      <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Your Name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        placeholder="Your Email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="subject" 
                        placeholder="Subject" 
                        required 
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <textarea 
                        className="form-control" 
                        name="message" 
                        rows="6" 
                        placeholder="Message" 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      {loading && <div className="loading">Loading</div>}
                      {error && <div className="error-message">{error}</div>}
                      {sent && <div className="sent-message">Your message has been sent. Thank you!</div>}

                      <button type="submit" className="btn btn-submit w-100" disabled={loading}>
                        Submit Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
