import { Eye, EyeClosed } from "lucide-react";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";

const Field = ({ label, value, placeholder, onChange, type, error }) => {
  const id = useId();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="mb-2">
        <label className="text-gray-700 text-sm" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          className={twMerge(
            "px-4 h-12 rounded-3xl border border-gray-300 w-full",
            error && "border-red-500"
          )}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-0 right-0 bottom-0 flex items-center px-4 cursor-pointer text-gray-300"
          >
            {showPassword ? <Eye /> : <EyeClosed />}
          </button>
        )}
      </div>
      <div className="text-sm text-red-500 mt-1 relative">
        <div className="absolute">{error}</div>
      </div>
    </div>
  );
};

export default Field;

// 要带着一点完美主义去写代码
// 1. 代码要简洁 - 恰到好处
