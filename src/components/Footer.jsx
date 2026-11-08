import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Logo from './Logo';
import { scrollToSection } from '../utils/scrollTo';
import './Footer.css';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Laptops', id: 'laptops' },
  { label: 'Accessories', id: 'accessories' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

const social = [
  { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://twitter.com' },
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo onClick={() => scrollToSection('home')} />
          <p className="footer__tagline">
            Your trusted partner for laptops, gear, and professional tech care.
          </p>
          <div className="footer__social">
            {social.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button type="button" onClick={() => scrollToSection(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>
              <HiOutlineLocationMarker aria-hidden="true" />
              <span>123 Tech Avenue, Innovation District</span>
            </li>
            <li>
              <HiOutlinePhone aria-hidden="true" />
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </li>
            <li>
              <HiOutlineMail aria-hidden="true" />
              <a href="mailto:hello@laptophub.com">hello@laptophub.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Laptop Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
