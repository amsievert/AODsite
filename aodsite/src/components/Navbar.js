import { useState } from 'react';

function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['Home', 'Media', 'About', 'Contact'];

  const handleNav = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${menuOpen ? ' navbar--open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => handleNav('Home')}>
          <span className="brand-aod">AOD</span>
          <span className="brand-full">Aliens of Destruction</span>
        </div>

        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link}>
              <button
                className={`nav-link${activePage === link ? ' active' : ''}`}
                onClick={() => handleNav(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
