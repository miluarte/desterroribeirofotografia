import { type ReactNode } from "react";
import "./SocialIcon.css";

interface SocialIconProps {
  icon: ReactNode;
  href?: string;
  label?: string;
}

export default function SocialIcon({ icon, href, label }: SocialIconProps) {
  if (href) {
    return (
      <a
        className="social-icon"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {icon}
      </a>
    );
  }

  return (
    <button className="social-icon" type="button" aria-label={label}>
      {icon}
    </button>
  );
}
