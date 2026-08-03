import { User } from "@phosphor-icons/react";
import Button from "../Button/Button";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">Esse momento não vai se repetir</h2>
          <p className="cta__text">
            Os primeiros dias de vida, a barriga cheia de sonhos, o primeiro aniversário: cada instante tem uma janela de tempo. Não deixe passar.
          </p>
        </div>

        <Button
          label="Quero agendar meu ensaio"
          variant="outline"
          icon={<User size={18} weight="regular" aria-hidden="true" />}
        />
      </div>
    </section>
  );
}
