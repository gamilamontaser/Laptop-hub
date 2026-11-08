import { HiMail } from 'react-icons/hi';
import './ContactCTA.css';

export default function ContactCTA() {
  const handleContact = () => {
    window.location.href = 'mailto:hello@laptophub.com?subject=Inquiry%20from%20Laptop%20Hub%20Website';
  };

  return (
    <section id="contact" className="section contact-cta">
      <div className="container">
        <div className="contact-cta__box">
          <div className="contact-cta__content">
            <h2 className="contact-cta__title">Ready to upgrade or get expert help?</h2>
            <p className="contact-cta__text">
              Reach out to Laptop Hub for product recommendations, accessory bundles, or
              maintenance appointments. Our team typically responds within one business day.
            </p>
            <button type="button" className="btn btn--primary contact-cta__btn" onClick={handleContact}>
              <HiMail size={20} />
              Contact Laptop Hub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
