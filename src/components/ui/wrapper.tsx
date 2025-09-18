import type React from "react";

export type WrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "standard" | "prose";
};

const variantClasses: Record<NonNullable<WrapperProps["variant"]>, string> = {
  standard: "max-w-6xl mx-auto px-8",
  prose:
    "prose prose-sm prose-headings:font-medium text-base-600 dark:text-base-400 dark:text-base-400 prose-headings:text-base-900 dark:prose-headings:text-white prose-blockquote:text-base-500 dark:prose-blockquote:text-base-600 dark:text-base-400 dark:prose-blockquote:border-base-500 prose-blockquote:font-normal prose-blockquote:tracking-normal prose-img:border prose-img:border-base-200 dark:prose-img:border-base-700 dark:prose-code:text-white prose-a:text-accent-400 hover:prose-a:text-accent-500 dark:prose-hr:border-base-800 prose-hr:border-base-300 prose-pre:border-none prose-pre:rounded-xl prose-strong:font-medium prose-a:duration-200 dark:prose-strong:text-white max-w-none prose-pre:scrollbar-hide",
};

const Wrapper: React.FC<WrapperProps> = ({
  variant = "standard",
  className = "",
  children,
  ...rest
}) => {
  const classes = [variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Wrapper;
