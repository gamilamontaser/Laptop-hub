import { scrollToSection } from '../utils/scrollTo';
import './ServiceCard.css';

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <article className="service-card">
      <div className="service-card__icon" aria-hidden="true">
        <Icon size={24} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      <button
        type="button"
        className="btn btn--ghost service-card__link"
        onClick={() => scrollToSection('contact')}
      >
        Learn More →
      </button>
    </article>
  );
}
