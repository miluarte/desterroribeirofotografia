import "./Services.css";

const SERVICES = [
  { label: "Gestante", image: "" },
  { label: "Newborn", image: "" },
  { label: "Infantil", image: "" },
];

interface ServiceCardProps {
  label: string;
  image: string;
}

function ServiceCard({ label, image }: ServiceCardProps) {
  return (
    <article
      className="service-card"
      style={image ? { backgroundImage: `url('${image}')` } : undefined}
    >
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
            <ServiceCard key={s.label} label={s.label} image={s.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
