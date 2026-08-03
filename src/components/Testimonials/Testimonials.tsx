import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote: "Os primeiros dias das fotos, sem exagero, foram os mais tranquilos da minha rotina de mãe de primeira viagem. As fotos ficaram exatamente como eu queria guardar esse tempo: instintivas, com o corpo dele, do jeitinho que era mesmo.",
    name: "[MODELO — aguardando depoimento real]",
    role: "Substituir após autorização da cliente",
  },
  {
    quote: "Os primeiros dias das fotos, sem exagero, foram os mais tranquilos da minha rotina de mãe de primeira viagem. As fotos ficaram exatamente como eu queria guardar esse tempo: instintivas, com o corpo dele, do jeitinho que era mesmo.",
    name: "[MODELO — aguardando depoimento real]",
    role: "Substituir após autorização da cliente",
  },
  {
    quote: "Os primeiros dias das fotos, sem exagero, foram os mais tranquilos da minha rotina de mãe de primeira viagem. As fotos ficaram exatamente como eu queria guardar esse tempo: instintivas, com o corpo dele, do jeitinho que era mesmo.",
    name: "[MODELO — aguardando depoimento real]",
    role: "Substituir após autorização da cliente",
  },
  {
    quote: "Os primeiros dias das fotos, sem exagero, foram os mais tranquilos da minha rotina de mãe de primeira viagem. As fotos ficaram exatamente como eu queria guardar esse tempo: instintivas, com o corpo dele, do jeitinho que era mesmo.",
    name: "[MODELO — aguardando depoimento real]",
    role: "Substituir após autorização da cliente",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__heading-wrapper">
        <div className="testimonials__heading">
          <span className="testimonials__label">DEPOIMENTOS</span>
          <h2 className="testimonials__title">O que as mamães dizem</h2>
        </div>
      </div>

      <div className="testimonials__carousel" aria-label="Depoimentos de clientes">
        <div className="testimonials__track">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard
              key={i}
              quote={t.quote}
              name={t.name}
              role={t.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
