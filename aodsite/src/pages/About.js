const specs = [
  { label: 'Display', value: '27" LCD' },
  { label: 'Resolution', value: '1920 × 1080' },
  { label: 'Controls', value: 'Joystick + 6 Buttons' },
  { label: 'Players', value: '1–2 Players' },
  { label: 'Cabinet Height', value: '72"' },
  { label: 'Cabinet Width', value: '28"' },
  { label: 'Cabinet Depth', value: '34"' },
  { label: 'Weight', value: '~280 lbs' },
  { label: 'Power', value: '110V / 60Hz' },
  { label: 'Audio', value: 'Stereo 2.1 Speakers' },
  { label: 'LED Lighting', value: 'Full RGB Marquee' },
  { label: 'Warranty', value: '1 Year Parts & Labor' },
];

function About({ setActivePage }) {
  return (
    <main>
      <div className="page-header">
        <span className="section-label">About</span>
        <h1 className="section-title">Aliens of Destruction</h1>
        <p className="section-subtitle">
          The story, the game, and the cabinet behind the experience.
        </p>
      </div>

      <section className="about-section">
        <div className="container">
          <div className="about-split">
            <div className="about-text">
              <h2>The Game</h2>
              <p>
                Aliens of Destruction (AOD) is a fast-paced vertical shoot-em-up
                arcade game that puts players in the cockpit of humanity's last
                line of defense against an overwhelming alien invasion.
              </p>
              <p>
                Fight through dozens of unique stages, each with escalating
                challenges, enemy formations, and spectacular boss encounters.
                Collect power-ups, upgrade your ship, and compete for the highest
                score on the global leaderboard.
              </p>
              <p>
                With intuitive controls and a difficulty curve designed for arcade
                play, AOD is immediately accessible to newcomers while offering
                the depth that keeps seasoned players coming back.
              </p>
            </div>
            <div className="about-image-placeholder">
              Gameplay Screenshot
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Hardware</span>
            <h2 className="section-title">Cabinet Specifications</h2>
            <p className="section-subtitle">
              Built to commercial arcade standards with premium components
              designed to handle years of heavy play.
            </p>
          </div>
          <div className="specs-grid">
            {specs.map(({ label, value }) => (
              <div className="spec-card" key={label}>
                <div className="spec-label">{label}</div>
                <div className="spec-value">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-split">
            <div className="about-image-placeholder">
              Developer Photo / Logo
            </div>
            <div className="about-text">
              <h2>About the Developer</h2>
              <p>
                [Developer name/company] is an independent game studio and
                arcade manufacturer dedicated to creating authentic arcade
                experiences for the modern age.
              </p>
              <p>
                Founded by a team of arcade enthusiasts and engineers, our
                mission is to bring the joy of classic arcade gaming to venues
                everywhere — with the quality and reliability that operators
                expect.
              </p>
              <div style={{ marginTop: '28px' }}>
                <button
                  className="btn btn-primary"
                  onClick={() => setActivePage('Contact')}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
