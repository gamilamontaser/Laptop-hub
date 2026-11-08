import './AccessoryCard.css';

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function AccessoryCard({ name, description, price, image }) {
  return (
    <article className="accessory-card">
      <div className="accessory-card__image">
        <img src={image} alt={name} loading="lazy" width={600} height={400} />
      </div>
      <div className="accessory-card__body">
        <h3 className="accessory-card__name">{name}</h3>
        <p className="accessory-card__desc">{description}</p>
        <span className="accessory-card__price">{formatPrice(price)}</span>
      </div>
    </article>
  );
}
