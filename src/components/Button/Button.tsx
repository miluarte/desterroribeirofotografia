import { ArrowRight } from "@phosphor-icons/react";
import { type ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  label?: string;
  variant?: "filled" | "outline" | "outline white";
  icon?: ReactNode;
  showIcon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  label = "button",
  variant = "filled",
  icon,
  showIcon = true,
  disabled = false,
  onClick,
}: ButtonProps) {
  const className = [
    "btn",
    `btn--${variant.replace(" ", "-")}`,
    disabled ? "btn--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const resolvedIcon = icon ?? <ArrowRight size={18} weight="regular" aria-hidden="true" />;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {showIcon && resolvedIcon}
      <span className="btn__label">{label}</span>
    </button>
  );
}
