import { cn } from "../libs/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "sm" | "md" | "lg";
}

import React from "react";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "bg-indigo-500 text-white rounded transition focus:outline-none focus:ring-2 focus:ring-indigo-300",
          size === "sm" && "px-4 py-1 text-sm",
          size === "md" && "px-8 py-2 text-md",
          size === "lg" && "px-12 py-3 text-lg",
          className
        )}
        {...props}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
