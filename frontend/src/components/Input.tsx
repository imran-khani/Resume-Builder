import React from "react";
import { cn } from "../libs/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col mb-4">
        <label 
          className="mb-2 font-bold text-lg text-gray-900" 
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            "px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
