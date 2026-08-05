import { useEffect, useState } from "react";
import "./Hero.css";

const AUTOPLAY_INTERVAL_MS = 6000;

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 3);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero__background" aria-label="Fotografias de sessões newborn, gestante e aniversário infantil">
        <img
          src="/imagens/heroSection/fotografia-newborn-bebe-ursinho-azul.webp"
          alt="Recém-nascido sorrindo dormindo abraçado a um ursinho azul, sessão newborn"
          width={1920}
          height={1277}
          fetchPriority="high"
          decoding="async"
          className={`hero__background-image ${activeIndex === 0 ? "is-active" : ""}`}
        />
        <img
          src="/imagens/heroSection/fotografia-aniversario-um-aninho-tema-safari.webp"
          alt="Bebê de um ano vestido de macacão bege sentado em cavalinho de madeira, decoração tema safari azul para festa de aniversário"
          width={1920}
          height={1277}
          fetchPriority="low"
          decoding="async"
          className={`hero__background-image ${activeIndex === 1 ? "is-active" : ""}`}
        />
        <img
          src="/imagens/heroSection/fotografia-gestante-detalhe-barriga-terco-vestido-amarelo.webp"
          alt="Detalhe da barriga de gestante com terço entrelaçado nos dedos, vestido amarelo, ensaio de gestante"
          width={1920}
          height={1278}
          fetchPriority="low"
          decoding="async"
          className={`hero__background-image ${activeIndex === 2 ? "is-active" : ""}`}
        />
      </div>
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
