const screenshots = [
  'Stage 1 — Invasion Begins',
  'Stage 3 — Asteroid Field',
  'Stage 5 — Boss Battle',
  'Multiplayer Mode',
  'High Score Screen',
  'Game Over Screen',
];

const cabinetPhotos = [
  'Front View',
  'Side Profile',
  '3/4 Angle',
];

function Media() {
  return (
    <main>
      <div className="page-header">
        <span className="section-label">Media</span>
        <h1 className="section-title">Screenshots &amp; Videos</h1>
        <p className="section-subtitle">
          Take a closer look at the gameplay, cabinet design, and arcade experience.
        </p>
      </div>

      <section className="media-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Gameplay</span>
            <h2 className="section-title">Screenshots</h2>
          </div>
          <div className="screenshots-grid">
            {screenshots.map(label => (
              <div className="screenshot-item" key={label}>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="media-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Hardware</span>
            <h2 className="section-title">Cabinet Photos</h2>
          </div>
          <div className="screenshots-grid">
            {cabinetPhotos.map(label => (
              <div className="screenshot-item" key={label}>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="media-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Trailer</span>
            <h2 className="section-title">Watch the Gameplay Trailer</h2>
          </div>
          <div className="video-placeholder">
            <div className="video-play-icon">▶</div>
            <p>Gameplay Trailer — Coming Soon</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Media;
