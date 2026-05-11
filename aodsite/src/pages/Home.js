function Home({ setActivePage }) {
  const features = [
    {
      icon: '🕹️',
      title: 'FAST-PACED ACTION',
      desc: 'Tactical, turn-based gameplay that keeps players engaged and coming back for more. Easy to learn, hard to master.',
    },
    {
      icon: '🖥️',
      title: 'AUTHENTIC HARDWARE',
      desc: 'High-quality arcade cabinet with a crystal-clear display, precision controls, and robust construction built to last.',
    },
    {
      icon: '🏆',
      title: 'COMPETITION READY',
      desc: 'Built-in leaderboard and scoring system lets players compete for the top spot and keeps your venue buzzing.',
    },
  ];

  const galleryItems = ['Gameplay', 'Cabinet', 'Action Shot', 'Venue'];

  return (
    <main>
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-content">
          <span className="hero-tag">Now Available</span>
          <h1 className="hero-title">
            ALIENS OF<br />
            <span className="highlight">DESTRUCTION</span>
          </h1>
          <p className="hero-subtitle">
            The ultimate arcade experience. Battle against your friends head-to-head or in teams in this strategic, turn-based artillery shooter.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => setActivePage('Contact')}>
              Buy a Cabinet
            </button>
            <button className="btn btn-secondary" onClick={() => setActivePage('Media')}>
              View Media
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="cabinet-placeholder">
            <div className="cabinet-placeholder-icon">👾</div>
            <span className="cabinet-placeholder-text">CABINET IMAGE</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why AOD?</span>
            <h2 className="section-title">Built for the Arcade Experience</h2>
            <p className="section-subtitle">
              Everything you need to bring the thrill of classic arcade gaming to your venue.
            </p>
          </div>
          <div className="features-grid">
            {features.map(({ icon, title, desc }) => (
              <div className="feature-card" key={title}>
                <div className="feature-icon">{icon}</div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Media</span>
            <h2 className="section-title">See It in Action</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map(label => (
              <div className="gallery-item" key={label}>
                <span className="gallery-item-label">{label}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="btn btn-secondary" onClick={() => setActivePage('Media')}>
              View All Media
            </button>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <h2 className="cta-title">Ready to Bring the Arcade Home?</h2>
        <p className="cta-subtitle">
          Contact us today to learn about pricing, delivery, and setup for your venue.
        </p>
        <button className="btn btn-primary" onClick={() => setActivePage('Contact')}>
          Get in Touch
        </button>
      </section>
    </main>
  );
}

export default Home;
