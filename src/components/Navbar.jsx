import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Logo from './Logo';
import { scrollToSection } from '../utils/scrollTo';
import './Navbar.css';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Laptops', id: 'laptops' },
  { label: 'Accessories', id: 'accessories' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Logo onClick={() => handleNav('home')} />

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className="navbar__link"
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="btn btn--primary navbar__cta"
            onClick={() => handleNav('laptops')}
          >
            Shop Now
          </button>
          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <HiX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className="navbar__mobile-link"
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            className="btn btn--primary navbar__mobile-cta"
            onClick={() => handleNav('laptops')}
          >
            Shop Now
          </button>
        </nav>
      </div>
    </header>
  );
}
