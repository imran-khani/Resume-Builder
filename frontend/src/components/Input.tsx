import React from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface IP extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  error?: string;
  register?: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions;
}

const Input = React.forwardRef<HTMLInputElement, IP>(
  ({ label, name, type = "text", error, register, registerOptions, ...props }) => {
    return (
      <div className="flex flex-col mb-4">
        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor={name}>
          {label}
        </label>
        <input
          {...(register ? register(name, registerOptions) : {})}
          {...props}
          type={type}
          name={name}
          className="px-3 py-2 border border-gray-300 rounded"
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
