import { User, X } from "@phosphor-icons/react";
import { useState } from "react";
import Button from "../Button/Button";
import NavLink from "../NavLink/NavLink";
import "./Header.css";

const NAV_LINKS = [
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "SOBRE", href: "#sobre" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Desterro Ribeiro Fotografia">
          <img src="/logo/logo-reduzida.svg" alt="DRF" width={140} height={28} />
        </a>

        {/* Desktop */}
        <div className="header__right">
          <nav className="header__nav" aria-label="Menu principal">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} label={link.label} href={link.href} />
            ))}
          </nav>
          <div className="header__actions">
            <Button
              label="Área da cliente"
              variant="outline"
              icon={<User size={18} weight="regular" aria-hidden="true" />}
            />
            <Button label="Agendar ensaio" variant="filled" />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="header__hamburger"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen
            ? <X size={24} weight="regular" aria-hidden="true" />
            : <img src="/icons_personalizados/List.svg" alt="" aria-hidden="true" width={56} height={16} />
          }
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="header__drawer">
          <nav className="header__drawer-nav" aria-label="Menu mobile">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} label={link.label} href={link.href} onClick={closeMenu} />
            ))}
          </nav>
          <div className="header__drawer-actions">
            <Button
              label="Área da cliente"
              variant="outline"
              icon={<User size={18} weight="regular" aria-hidden="true" />}
              onClick={closeMenu}
            />
            <Button label="Agendar ensaio" variant="filled" onClick={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
}
