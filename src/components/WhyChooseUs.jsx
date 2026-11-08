import { FaShieldHalved, FaHeadset, FaScrewdriverWrench, FaStar } from 'react-icons/fa6';
import SectionHeader from './SectionHeader';
import './WhyChooseUs.css';

const icons = {
  quality: FaShieldHalved,
  support: FaHeadset,
  maintenance: FaScrewdriverWrench,
  satisfaction: FaStar,
};

export default function WhyChooseUs({ items }) {
  return (
    <section id="why-us" className="section section--alt">
      <div className="container">
        <SectionHeader
          eyebrow="Why Laptop Hub"
          title="Built for people who depend on their machines"
          subtitle="From selection to service, we focus on quality, clarity, and long-term support."
        />
        <div className="why-grid">
          {items.map((item) => {
            const Icon = icons[item.id] || FaStar;
            return (
              <article key={item.id} className="why-card">
                <div className="why-card__icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
