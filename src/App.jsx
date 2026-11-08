import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ProductCard from './components/ProductCard';
import AccessoryCard from './components/AccessoryCard';
import ServiceCard from './components/ServiceCard';
import WhyChooseUs from './components/WhyChooseUs';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { featuredLaptops, accessories } from './data/products';
import { maintenanceServices, whyChooseUs } from './data/services';
import { scrollToSection } from './utils/scrollTo';

function handleViewDetails() {
  scrollToSection('contact');
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="laptops" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Featured"
              title="Premium laptops for work and play"
              subtitle="Hand-picked models with the performance, displays, and build quality professionals expect."
            />
            <div className="grid-4">
              {featuredLaptops.map((laptop) => (
                <ProductCard key={laptop.id} {...laptop} onViewDetails={handleViewDetails} />
              ))}
            </div>
          </div>
        </section>

        <section id="accessories" className="section section--alt">
          <div className="container">
            <SectionHeader
              eyebrow="Accessories"
              title="Complete your setup"
              subtitle="Mice, keyboards, audio, and bags that pair perfectly with your daily driver."
            />
            <div className="grid-4">
              {accessories.map((item) => (
                <AccessoryCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Services"
              title="Professional maintenance"
              subtitle="Keep your laptop running like new with certified repairs and routine care."
            />
            <div className="grid-4">
              {maintenanceServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs items={whyChooseUs} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
