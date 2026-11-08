import './ProductCard.css';

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({ name, specs, price, image, onViewDetails }) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={image} alt={name} loading="lazy" width={600} height={400} />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__specs">{specs}</p>
        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(price)}</span>
          <button type="button" className="btn btn--secondary product-card__btn" onClick={onViewDetails}>
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
