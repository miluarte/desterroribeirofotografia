import "./WhatsAppButton.css";

interface WhatsAppButtonProps {
  href?: string;
}

export default function WhatsAppButton({
  href = "https://wa.me/5586994799945",
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img
        src="/icons_personalizados/Whatsapp.svg"
        alt=""
        aria-hidden="true"
        className="whatsapp-button__icon"
        width={60}
        height={60}
      />
    </a>
  );
}
