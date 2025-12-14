"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-[family-name:var(--font-unbounded)] font-bold rounded-[73px] transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-[var(--color-primary-orange)] text-white hover:brightness-110 active:scale-[0.98]",
    secondary:
      "bg-[var(--color-secondary)] text-black hover:bg-[var(--color-gray)] active:scale-[0.98]",
    outline:
      "bg-transparent border-2 border-[var(--color-primary-orange)] text-[var(--color-primary-orange)] hover:bg-[var(--color-primary-orange)] hover:text-white",
  };

  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

