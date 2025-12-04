import Link from "next/link";
import type React from "react";

export type Variant = "default" | "accent" | "muted" | "none";
export type Size = "xxs" | "xs" | "sm" | "base" | "md" | "lg" | "xl";
export type Gap = "xs" | "sm" | "base" | "md" | "lg";

const variantClass: Record<Variant, string[]> = {
  default: [
    "text-white",
    "bg-base-800",
    "hover:bg-base-900",
    "focus:ring-base-900",
    "dark:text-base-900",
    "dark:bg-base-50",
    "dark:hover:bg-base-100",
    "dark:focus:ring-white",
  ],
  accent: [
    "text-white",
    "bg-accent-500",
    "hover:bg-accent-400",
    "focus:ring-accent-500",
    "dark:text-base-950",
    "dark:bg-accent-400",
    "dark:hover:bg-accent-300",
    "dark:focus:ring-accent-400",
  ],
  muted: [
    "text-base-900",
    "bg-base-100",
    "hover:bg-base-200",
    "focus:ring-base-100",
    "dark:text-white",
    "dark:bg-base-800",
    "dark:hover:bg-base-800",
    "dark:focus:ring-base-800",
  ],
  none: [],
};

const sizes: Record<Size, string[]> = {
  xxs: ["h-7.5", "px-5", "py-2", "text-xs"],
  xs: ["h-8", "px-6", "py-3", "text-xs"],
  sm: ["h-9", "px-6", "py-3", "text-sm"],
  base: ["h-10", "px-8", "py-4", "text-sm"],
  md: ["h-11", "px-8", "py-4", "text-base"],
  lg: ["h-12", "px-8", "py-4", "text-lg"],
  xl: ["h-13", "px-8", "py-4", "text-lg"],
};

const iconSizes: Record<Size, string[]> = {
  xxs: ["size-7.5", "py-2", "text-xs"],
  xs: ["size-8", "text-xs"],
  sm: ["size-9", "text-sm"],
  base: ["size-10", "text-sm"],
  md: ["size-11", "text-md"],
  lg: ["size-12", "text-lg"],
  xl: ["size-13", "text-lg"],
};

const gapMap: Record<Gap, string[]> = {
  xs: ["gap-2"],
  sm: ["gap-4"],
  base: ["gap-8"],
  md: ["gap-10"],
  lg: ["gap-12"],
};

const baseClass = [
  "flex",
  "items-center",
  "font-medium",
  "justify-center",
  "transition-all",
  "rounded-lg",
  "items-center",
  "duration-300",
  "focus:ring-2",
  "focus:ring-none",
  "focus:ring-offset-1",
  "focus:ring-offset-white",
  "dark:focus:ring-offset-base-900",
];

export type ButtonLikeProps = {
  variant?: Variant;
  size?: Size;
  onlyIconSize?: Size;
  iconOnly?: boolean;
  gap?: Gap;
  isLink?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string })
);

const Button: React.FC<ButtonLikeProps> = ({
  variant = "default",
  size = "base",
  onlyIconSize,
  iconOnly = false,
  gap,
  isLink = false,
  className = "",
  leftIcon,
  rightIcon,
  icon,
  href,
  children,
  ...rest
}) => {
  const sizeKey: Size = (iconOnly ? (onlyIconSize ?? size) : size) as Size;
  const sizeClass = iconOnly ? iconSizes[sizeKey] : sizes[sizeKey];
  const gapClass = !iconOnly && gap ? gapMap[gap] : [];
  const additional = className ? className.split(" ") : [];
  const classes = [
    ...baseClass,
    ...(variantClass[variant] || []),
    ...(sizeClass || []),
    ...(gapClass || []),
    ...additional,
  ].join(" ");

  const content = iconOnly ? (
    <>{icon}</>
  ) : (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (isLink && href) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
};

export default Button;
