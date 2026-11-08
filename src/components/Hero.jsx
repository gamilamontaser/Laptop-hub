import { scrollToSection } from '../utils/scrollTo';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content animate-in">
          <p className="hero__badge">Premium Tech · Local Experts</p>
          <h1 className="hero__title">
            Everything Your Laptop Needs.
            <span className="hero__title-accent"> All in One Place.</span>
          </h1>
          <p className="hero__description">
            Laptop Hub brings together top-tier laptops, essential accessories, and
            professional maintenance under one roof. Whether you are upgrading, outfitting
            your workspace, or getting expert care for your machine, we have you covered.
          </p>
          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => scrollToSection('laptops')}
            >
              Explore Products
            </button>
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </button>
          </div>
          <ul className="hero__stats">
            <li>
              <strong>500+</strong>
              <span>Devices serviced</span>
            </li>
            <li>
              <strong>4.9</strong>
              <span>Customer rating</span>
            </li>
            <li>
              <strong>24h</strong>
              <span>Fast turnaround</span>
            </li>
          </ul>
        </div>
        <div className="hero__visual animate-in" style={{ animationDelay: '0.15s' }}>
          <div className="hero__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=85"
              alt="Modern laptop on a desk with ambient lighting"
              width={800}
              height={600}
              loading="eager"
            />
            <div className="hero__glow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
