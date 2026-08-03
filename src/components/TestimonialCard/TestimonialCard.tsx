import "./TestimonialCard.css";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

export default function TestimonialCard({ quote, name, role, avatar }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <article className="testimonial-card">
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>

      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar-wrapper">
          {avatar ? (
            <img src={avatar} alt={name} className="testimonial-card__avatar-img" />
          ) : (
            <span className="testimonial-card__avatar-initials">{initials}</span>
          )}
          <span className="testimonial-card__avatar-corner testimonial-card__avatar-corner--tl" aria-hidden="true" />
          <span className="testimonial-card__avatar-corner testimonial-card__avatar-corner--tr" aria-hidden="true" />
          <span className="testimonial-card__avatar-corner testimonial-card__avatar-corner--bl" aria-hidden="true" />
          <span className="testimonial-card__avatar-corner testimonial-card__avatar-corner--br" aria-hidden="true" />
        </div>

        <div className="testimonial-card__info">
          <span className="testimonial-card__name">{name}</span>
          <span className="testimonial-card__role">{role}</span>
        </div>
      </div>
    </article>
  );
}
