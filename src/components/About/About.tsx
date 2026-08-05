import "./About.css";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__container">

        {/* Left — image collage */}
        <div className="about__collage">
          <div className="about__img about__img--small" />
          <img
            src="/imagens/fotografa/fotografa-desterro-ribeiro-retrato-camera.webp"
            alt="Desterro Ribeiro segurando câmera fotográfica e sorrindo"
            width={439}
            height={549}
            loading="lazy"
            decoding="async"
            className="about__img about__img--large"
          />
          <span className="about__vertical-label" aria-hidden="true">Fotógrafa</span>
        </div>

        {/* Right — content card */}
        <div className="about__card">
          <div className="about__card-body">

            <div className="about__heading">
              <h2 className="about__title">Olá, sou a Desterro</h2>
              <span className="about__subtitle">Fotógrafa</span>
            </div>

            <div className="about__paragraphs">
              <p className="about__text">
                Há mais de 10 anos me especializei em capturar os momentos mais sagrados da vida, a emoção de uma barriga cheia de vida, o cheirinho indescritível de um recém-nascido, o abraço bagunçado de uma família feliz.
              </p>
              <p className="about__text">
                Em Teresina que construo minha história. Acredito que toda família merece ter memórias bonitas, cuidadas e emocionais, independente do estilo ou cenário. Meu trabalho é ser invisível o suficiente para que vocês se sintam em casa, e presente o suficiente para não perder nenhum momento.
              </p>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
}

