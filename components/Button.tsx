import Link from "next/link";
import { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "gold";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#1a2744] text-white hover:bg-[#243561] focus:ring-[#1a2744]",
  secondary:
    "bg-transparent text-[#1a2744] border-2 border-[#1a2744] hover:bg-[#1a2744] hover:text-white focus:ring-[#1a2744]",
  gold:
    "bg-[#c9a84c] text-white hover:bg-[#b8973b] focus:ring-[#c9a84c]",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
