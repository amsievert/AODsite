function Contact() {
  return (
    <main>
      <div className="page-header">
        <span className="section-label">Limited Edition</span>
        <h1 className="section-title">Reserve Your Cabinet</h1>
        <p className="section-subtitle">
          Because production is limited, we're accepting pre‑order deposits to secure your unit.
        </p>
      </div>

      <section className="reserve-section">
        <div className="container">
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-label">Deposit</div>
              <div className="pricing-amount">$1,000</div>
              <div className="pricing-note">Applied toward full purchase price</div>
            </div>
            <div className="pricing-card">
              <div className="pricing-label">Remaining Balance</div>
              <div className="pricing-amount">$4,000</div>
              <div className="pricing-note">Due when your game goes on the production line</div>
            </div>
            <div className="pricing-card">
              <div className="pricing-label">Lead Time</div>
              <div className="pricing-amount">~12 Weeks</div>
              <div className="pricing-note">Estimated from pre‑order to production</div>
            </div>
          </div>
        </div>
      </section>

      <section className="reserve-section reserve-section--alt">
        <div className="container">
          <div className="reserve-split">
            <div className="reserve-steps-wrapper">
              <h2 className="reserve-heading">How to Reserve</h2>
              <ol className="reserve-steps">
                <li><span>Call, text, or email Hilton to express interest</span></li>
                <li><span>Provide your name and email address</span></li>
                <li><span>Send your $1,000 deposit via PayPal to <strong>hmjones3@gmail.com</strong></span></li>
                <li><span>Receive your confirmation and assigned edition number</span></li>
              </ol>
            </div>

            <div className="reserve-contact-cards">
              <div className="contact-info-card">
                <h3>CONTACT HILTON</h3>
                <div className="contact-info-item">
                  <span className="contact-info-icon">📞</span>
                  <span className="contact-info-text">
                    Call or Text<br />
                    <strong>309‑838‑2156</strong>
                  </span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">📧</span>
                  <span className="contact-info-text">
                    Email<br />
                    <strong>hmjones3@gmail.com</strong>
                  </span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">💳</span>
                  <span className="contact-info-text">
                    PayPal Deposit<br />
                    <strong>hmjones3@gmail.com</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
