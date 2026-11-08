import './Logo.css';

export default function Logo({ onClick }) {
  return (
    <button type="button" className="logo" onClick={onClick} aria-label="Laptop Hub home">
      <span className="logo__icon" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="4" y="7" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 22h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="14" cy="13" r="2" fill="#60A5FA" />
        </svg>
      </span>
      <span className="logo__text">
        Laptop<span className="logo__accent">Hub</span>
      </span>
    </button>
  );
}
