import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-[#F2F0EB] text-[#080808] hover:bg-[#D65A31] hover:text-[#F2F0EB]",
  accent: "bg-[#D65A31] text-[#F2F0EB] hover:bg-[#F2F0EB] hover:text-[#080808]",
  ghost: "bg-transparent text-[#F2F0EB] hover:text-[#D65A31]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.65rem] gap-2",
  md: "px-7 py-3.5 text-[0.68rem] gap-3",
  lg: "px-9 py-4 text-[0.7rem] gap-3",
};

const baseClasses =
  "group inline-flex w-fit items-center justify-center text-center font-body text-sm font-semibold tracking-[0.01em] transition-colors duration-300";

function Inner({ children, showArrow }: { children: ReactNode; showArrow?: boolean }) {
  return (
    <>
      {children}
      {showArrow ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
}) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <Inner showArrow={showArrow}>{props.children}</Inner>
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  children,
  ...props
}: Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <Inner showArrow={showArrow}>{children}</Inner>
    </Link>
  );
}
