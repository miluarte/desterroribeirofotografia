import "./Hero.css";

function ScrollArrow() {
  return (
    <svg
      width="6"
      height="23"
      viewBox="0 0 6 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="3" y1="0" x2="3" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="0,17 3,22 6,17" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__brand-block">
          <img
            src="/logo/monograma.svg"
            alt="Desterro Ribeiro Fotografia"
            className="hero__monogram"
            width={58}
            height={59}
          />
          <div className="hero__text-block">
            <h1 className="hero__title">
              FOTOGRAFIA NEWBORN,<br />
              GESTANTE E INFANTIL<br />
              EM TERESINA E REGIÃO
            </h1>
            <p className="hero__tagline">com delicadeza, para guardar para sempre</p>
          </div>
        </div>

        <a href="#servicos" className="hero__scroll-indicator">
          <span className="hero__scroll-label">CONHEÇA OS SERVIÇOS</span>
          <ScrollArrow />
        </a>
      </div>
    </section>
  );
}
