import imgGravity from '../images/aod_gravity.png';
import imgDevs from '../images/aod_devs.jpeg';

const highlights = [
  'Precision‑cut, heavy‑duty construction',
  'Commercial‑grade joysticks and buttons',
  'High‑resolution display',
  'Custom artwork and accents',
  'Smooth, responsive controls',
  'Built and assembled in limited batches',
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
                Aliens of Destruction is a brand‑new, handcrafted 2‑player arcade experience 
                that blends strategic combat, physics‑based destruction, and over‑the‑top alien 
                firepower.
              </p>
              <p>
                Designed for players who love competitive battles will enjoying a beverage,
                this cabinet delivers a modern twist on classic artillery‑style gameplay,
                all inside a premium, collector‑grade arcade machine.
              </p>
              <p>
                Fight across many unique stages, each with its own mechanic to master.
                Collect airdrop weapons, destroy terrain, avoid the shrinking map boundaries, 
                and outshoot your opponents.
              </p>
            </div>
            <img src={imgGravity} alt="Gameplay screenshot" className="about-img" />
          </div>
        </div>
      </section>

      <section className="about-section about-section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Hardware</span>
            <h2 className="section-title">Cabinet Highlights</h2>
          </div>
          <ul className="highlights-list">
            {highlights.map(item => (
              <li key={item} className="highlight-item">{item}</li>
            ))}
          </ul>
          <div className="cabinet-callout">
            Every cabinet is individually numbered #1–100, making each one a true collector's piece.
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-split">
            <img src={imgDevs} alt="The developers" className="about-img" />
            <div className="about-text">
              <h2>About the Creators</h2>
              <p>
                Game Design by Hilton Jones
              </p>
              <p>
                Programming and Art by Alex Sievert
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
