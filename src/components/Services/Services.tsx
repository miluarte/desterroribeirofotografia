import "./Services.css";

const SERVICES = [
  {
    label: "Gestante",
    image: "/imagens/servicos/fotografia-gestante-ensaio-dupla-exposicao-ultrassom.webp",
    alt: "Gestante sentada em cubo branco durante ensaio de maternidade, com imagem de ultrassom projetada acima em efeito de dupla exposição",
  },
  {
    label: "Newborn",
    image: "",
    alt: "",
  },
  {
    label: "Infantil",
    image: "/imagens/servicos/fotografia-primeiro-aniversario-infantil-baloes-decoracao.webp",
    alt: "Bebê sorridente engatinhando sob faixa Happy Birthday com balões dourados e vermelhos, sessão de primeiro aniversário",
  },
];

interface ServiceCardProps {
  label: string;
  image: string;
  alt: string;
}

function ServiceCard({ label, image, alt }: ServiceCardProps) {
  return (
    <article className="service-card">
      {image && (
        <img
          src={image}
          alt={alt}
          width={443}
          height={554}
          loading="lazy"
          decoding="async"
          className="service-card__image"
        />
      )}
      <div className="service-card__overlay" />
      <div className="service-card__content">
        <img
          src="/logo/monograma.svg"
          alt=""
          aria-hidden="true"
          className="service-card__monogram"
          width={58}
          height={59}
        />
        <span className="service-card__label">{label}</span>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services__container">
        <div className="services__heading">
          <span className="services__label">PORTFOLIO</span>
          <h2 className="services__title">Histórias que já eternizamos</h2>
        </div>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.label} label={s.label} image={s.image} alt={s.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
