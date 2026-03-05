import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 font-medium text-base transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]";
  const variants = {
    primary:
      "bg-terracotta text-white hover:bg-terracotta-dark shadow-sm hover:shadow-md",
    outline:
      "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
    dark:
      "border-2 border-paper/30 text-paper hover:bg-paper hover:text-ink",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
