import aodCabinetSide from '../images/AOD-4 Edited.png';
import aodCabinetFront from '../images/AOD-1 Cropped.png';
import imgDestruction from '../images/aod_destruction.png';
import imgAward from '../images/aod_award.jpeg';
import imgVenue from '../images/aod_venue_cropped.jpg';

function Home({ setActivePage }) {
  const features = [
    {
      title: '2-Player Competitive Gameplay',
      desc: 'Face off in fast, strategic matches that reward skill and creativity.',
    },
    {
      title: 'Fully Destructible Terrain',
      desc: 'Every blast changes the battlefield, opening new angles and new tactics.',
    },
    {
      title: 'Unique Alien Characters',
      desc: 'Each alien brings its own personality, animations, and arsenal. Plus hats ... yes you get to wear hats!',
    },
    {
      title: 'Modern Retro Aesthetic',
      desc: 'Bright, bold pixel-inspired visuals with smooth modern effects.',
    },
    {
      title: 'Endless Replayability',
      desc: 'No two matches play the same thanks to dynamic terrain and weapon variety.'
    }
  ];

  const galleryItems = [
    { label: 'Gameplay', img: imgDestruction },
    { label: 'Cabinet', img: aodCabinetFront },
    { label: 'Action Shot', img: imgAward },
    { label: 'Venue',       img: imgVenue },
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-content">
          <span className="hero-tag">Limited Edition</span>
          <h1 className="hero-title">
            ALIENS OF<br />
            <span className="highlight">DESTRUCTION</span>
          </h1>
          <p className="hero-subtitle">
            A handcrafted 2-player arcade cabinet built for strategic, physics-based combat with a modern twist on classic artillery gameplay, 
            best enjoyed with a drink in hand.
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
          <img src={aodCabinetSide} alt="Aliens of Destruction arcade cabinet" className="hero-cabinet-img" />
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why AOD?</span>
            <h2 className="section-title">Destroy the Terrain. Defeat Your Opponent.</h2>
            <p className="section-subtitle">
              Aliens of Destruction drops two players into a fully destructible battlefield where every shot reshapes the terrain. Choose your alien, explore the maps,
              and outsmart your opponents with precision, timing, and creative chaos.
            </p>
          </div>
          <div className="features-grid">
            {features.map(({ title, desc }) => (
              <div className="feature-card" key={title}>
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
            {galleryItems.map(({ label, img }) => (
              <div className="gallery-item" key={label}>
                {img
                  ? <img src={img} alt={label} className="gallery-item-img" />
                  : <span className="gallery-item-label">{label}</span>
                }
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
          Only 100 cabinets will ever be produced. Once they are gone, they are gone forever.
        </p>
        <button className="btn btn-primary" onClick={() => setActivePage('Contact')}>
          Get yours now
        </button>
      </section>
    </main>
  );
}

export default Home;
