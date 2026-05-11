import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="page-header">
        <span className="section-label">Contact</span>
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">
          Interested in purchasing a cabinet or have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success">
              <div className="form-success-icon">✓</div>
              <h2>Message Sent!</h2>
              <p>Thanks for reaching out. We'll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <>
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    className="form-input"
                    type="tel"
                    name="phone"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">I'm interested in...</label>
                  <select className="form-select" name="interest" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option value="buy">Purchasing a Cabinet</option>
                    <option value="pricing">Pricing &amp; Availability</option>
                    <option value="demo">Requesting a Demo</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    placeholder="Tell us about your venue, any questions, or anything else we should know..."
                    required
                  />
                </div>
                <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>

        <div className="contact-info">
          <div className="contact-info-card">
            <h3>CONTACT INFO</h3>
            <div className="contact-info-item">
              <span className="contact-info-icon">📧</span>
              <span className="contact-info-text">
                contact@aliensofdesruction.com<br />
                <em>(placeholder)</em>
              </span>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">📞</span>
              <span className="contact-info-text">
                (555) 000-0000<br />
                <em>(placeholder)</em>
              </span>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon">📍</span>
              <span className="contact-info-text">
                Location Address<br />
                City, State ZIP<br />
                <em>(placeholder)</em>
              </span>
            </div>
          </div>

          <div className="contact-info-card">
            <h3>BUSINESS HOURS</h3>
            <div className="contact-info-item">
              <span className="contact-info-icon">🕐</span>
              <div className="contact-info-text">
                <div>Mon – Fri: 9am – 5pm</div>
                <div>Sat – Sun: Closed</div>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <h3>CABINET SALES</h3>
            <p className="contact-info-text" style={{ lineHeight: '1.7' }}>
              We sell directly to arcades, bars, entertainment venues, and private
              collectors. Contact us for current pricing, lead times, and delivery options.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
