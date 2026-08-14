import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import SocialIcon from "../SocialIcon/SocialIcon";
import "./Footer.css";

const ENSAIOS_LINKS = [
  { label: "Ensaio Gestante", href: "#servicos" },
  { label: "Ensaio Newborn", href: "#servicos" },
  { label: "Ensaio Infantil", href: "#servicos" },
  { label: "Jornada Completa", href: "#servicos" },
];

const NAVEGACAO_LINKS = [
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre a Fotógrafa", href: "#sobre" },
  { label: "Dúvidas frequentes", href: "#faq" },
  { label: "Agendar ensaio", href: "#contato" },
];

const CONTATO_LINKS = [
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre a Fotógrafa", href: "#sobre" },
  { label: "Dúvidas frequentes", href: "#faq" },
  { label: "Agendar ensaio", href: "#contato" },
];

interface FooterMenuProps {
  label: string;
  links: { label: string; href: string }[];
}

function FooterMenu({ label, links }: FooterMenuProps) {
  return (
    <div className="footer__menu">
      <span className="footer__menu-label">{label}</span>
      <ul className="footer__menu-links">
        {links.map((link) => (
          <li key={link.label}>
            <a className="footer__menu-link" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__header">
          <div className="footer__brand">
            <img
              src="/logo/logo-completa.svg"
              alt="Desterro Ribeiro Fotografia"
              className="footer__logo"
            />
            <p className="footer__description">
              Fotografia especializada em newborn, gestante e família em
              Teresina, Piauí. Eternizando memórias com sensibilidade e
              cuidado.
            </p>
            <div className="footer__social">
              <SocialIcon
                icon={<InstagramLogo size={28} weight="regular" />}
                href="https://www.instagram.com/desterroribeiro/"
                label="Instagram"
              />
              <SocialIcon
                icon={<WhatsappLogo size={28} weight="regular" />}
                href="https://wa.me/5586994799945"
                label="WhatsApp"
              />
            </div>
          </div>

          <nav className="footer__nav" aria-label="Rodapé">
            <FooterMenu label="Ensaios" links={ENSAIOS_LINKS} />
            <FooterMenu label="Navegação" links={NAVEGACAO_LINKS} />
            <FooterMenu label="Contato" links={CONTATO_LINKS} />
          </nav>
        </div>

        <div className="footer__meta">
          <span>© 2026 Desterro Ribeiro Fotografia · CNPJ 53.687.467/0001-18</span>
          <span>Fotógrafa newborn, gestante e família em Teresina</span>
        </div>
      </div>
    </footer>
  );
}
