import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IP extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  register: UseFormRegister<FieldValues>;
}

const Input = React.forwardRef<HTMLInputElement, IP>(
  ({ label, name, type, value, onChange, error, register }, ref) => {
    return (
      <div className="flex flex-col mb-4">
        <label className="mb-2 font-bold text-lg text-gray-900" htmlFor={name}>
          {label}
        </label>
        <input
          ref={(e) => {
            if (typeof ref === "function") ref(e);
            register(name);
          }}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="px-3 py-2 border border-gray-300 rounded"
        />
        {error.length > 0 && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
