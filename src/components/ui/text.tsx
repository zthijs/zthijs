import Link from "next/link";
import type React from "react";

export type AllowedTag =
  | "a"
  | "p"
  | "em"
  | "span"
  | "small"
  | "strong"
  | "summary"
  | "blockquote"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

const textStyles = {
  display6XL:
    "text-4xl leading-tight tracking-tight sm:text-7xl md:text-9xl lg:text-[12rem]",
  display5XL:
    "text-4xl leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-[10rem]",
  display4XL:
    "text-4xl leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-9xl",
  display3XL:
    "text-4xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl",
  display2XL:
    "text-5xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
  displayXL:
    "text-4xl leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
  displayLG:
    "text-3xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",
  displayMD:
    "text-2xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl ",
  displaySM: "text-lg leading-tight sm:text-xl md:text-2xl lg:text-3xl",
  displayXS: "text-base leading-tight sm:text-lg md:text-xl lg:text-2xl",
  textXL: "text-lg sm:text-xl md:text-2xl",
  textLG: "text-base sm:text-lg md:text-xl 2xl:text-4xl",
  textBase: "text-base 2xl:text-3xl",
  textSM: "text-sm 2xl:text-xl",
  textXS: "text-xs 2xl:text-lg",
  textMD: "text-base sm:text-lg md:text-xl",
} as const;

export type TextVariant = keyof typeof textStyles;

export type TextProps<T extends AllowedTag = "p"> = Omit<
  React.ComponentPropsWithoutRef<T>,
  "className" | "children"
> & {
  tag?: T;
  variant?: TextVariant;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
};

const Text = <T extends AllowedTag = "p">({
  tag,
  variant = "textMD",
  className = "",
  leftIcon,
  rightIcon,
  children,
  href,
  ...rest
}: TextProps<T>) => {
  const Tag = (tag ?? "p") as unknown as React.ElementType;
  const base = textStyles[variant] ?? textStyles.textMD;
  const classes = [base, className].filter(Boolean).join(" ");

  if (tag === "a" && href) {
    return (
      <Link href={href} className={classes} {...(rest as any)}>
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  return (
    <Tag className={classes} {...(rest as any)}>
      {leftIcon}
      {children}
      {rightIcon}
    </Tag>
  );
};

export default Text;
