"use client";

import { classFormatter } from "@/lib/utils";

type ButtonProps = {
  variant: "ghost" | "default" | "action" | "ghost-white";
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classFormatter(
        "rounded",
        {
          "hover:bg-white/10 p-1 ": variant === "ghost-white",
          "hover:bg-black/10 p-1 ": variant === "ghost",
          "px-2 py-1.5": variant === "default" || variant === "action",
          "hover:bg-black/10 bg-neutral-100": variant === "default",
          "text-white hover:bg-purple-700 bg-purple-600": variant === "action",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
