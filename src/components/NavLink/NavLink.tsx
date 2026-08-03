import "./NavLink.css";

interface NavLinkProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

export default function NavLink({ label, href = "#", onClick }: NavLinkProps) {
  return (
    <a href={href} className="nav-link" onClick={onClick}>
      <span className="nav-link__corners" aria-hidden="true">
        <span className="nav-link__corner nav-link__corner--tl" />
        <span className="nav-link__corner nav-link__corner--tr" />
        <span className="nav-link__corner nav-link__corner--bl" />
        <span className="nav-link__corner nav-link__corner--br" />
      </span>
      <span className="nav-link__label">{label}</span>
    </a>
  );
}
