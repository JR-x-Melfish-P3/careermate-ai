"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";

const Field = ({
  label,
  value,
  hint,
  placeholder,
  onChange,
  type,
  error,
  readOnly = false,
  optional = false,
}) => {
  const id = useId();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-8">
      <div className="mb-2">
        <label htmlFor={id}>
          <span className="text-gray-700 text-sm">{label}</span>
          {optional && (
            <span className="text-gray-400 text-xs ml-2">(Optional)</span>
          )}
        </label>
      </div>
      {hint && <div className="text-gray-400 text-sm mb-2">{hint}</div>}
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className={twMerge(
            "px-4 h-12 rounded-3xl border border-gray-300 w-full",
            error && "border-red-500",
            readOnly && "bg-gray-50 cursor-not-allowed",
          )}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-0 right-0 bottom-0 flex items-center px-4 cursor-pointer text-gray-300"
          >
            {showPassword ? (
              <Eye aria-label="Hide Password" />
            ) : (
              <EyeClosed aria-label="Show Password" />
            )}
          </button>
        )}
      </div>
      <div className="text-sm text-red-500 mt-1 relative">
        {error && (
          <div className="absolute" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Field;

// 要带着一点完美主义去写代码
// 1. 代码要简洁 - 恰到好处
