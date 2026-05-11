import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Media from './pages/Media';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const handleSetPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Home':    return <Home setActivePage={handleSetPage} />;
      case 'Media':   return <Media />;
      case 'About':   return <About setActivePage={handleSetPage} />;
      case 'Contact': return <Contact />;
      default:        return <Home setActivePage={handleSetPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} setActivePage={handleSetPage} />
      <div className="page-content">
        {renderPage()}
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="footer-logo">AOD</span>
            <p className="footer-tagline">Aliens of Destruction</p>
          </div>
          <div className="footer-links">
            {['Home', 'Media', 'About', 'Contact'].map(page => (
              <button key={page} className="footer-link" onClick={() => handleSetPage(page)}>
                {page}
              </button>
            ))}
          </div>
          <p className="footer-copy">© 2025 Aliens of Destruction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
