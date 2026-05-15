import aodCabinetSide1 from '../images/AOD-4 Edited.png';
import aodCabinetSide2 from '../images/AOD-7 Edited.png';
import aodCabinetFront from '../images/AOD-1 Edited.png';
import imgCharSelect  from '../images/aod_charselect.png';
import imgDestruction from '../images/aod_destruction.png';
import imgGrapple     from '../images/aod_grapple.png';
import imgGravity     from '../images/aod_gravity.png';
import imgAnimals     from '../images/aod_animals.png';
import imgHighScore   from '../images/aod_highscore.png';

const screenshots = [
  { label: 'Hat Select Screen', img: imgCharSelect },
  { label: 'Destruction',       img: imgDestruction },
  { label: 'Grappling',         img: imgGrapple },
  { label: 'Moon Gravity',      img: imgGravity },
  { label: 'Animals',           img: imgAnimals },
  { label: 'High Score Screen', img: imgHighScore },
];

const cabinetPhotos = [
  { label: 'Front View',    img: aodCabinetFront },
  { label: 'Side Profile',  img: aodCabinetSide1 },
  { label: '3/4 Angle',     img: aodCabinetSide2 },
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
            {screenshots.map(({ label, img }) => (
              <div className="screenshot-item" key={label}>
                <img src={img} alt={label} className="screenshot-img" />
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
          <div className="screenshots-grid screenshots-grid--portrait">
            {cabinetPhotos.map(({ label, img }) => (
              <div className="screenshot-item" key={label}>
                <img src={img} alt={label} className="screenshot-img" />
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
          <div className="video-embed-wrapper">
            <iframe
              src="https://www.youtube.com/embed/cQ__OOQvWK8"
              title="Aliens of Destruction Gameplay Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Media;
