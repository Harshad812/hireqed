import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx"; // Install clsx or use a similar library

type Variant = "fill" | "outline" | "text" | "none";
type Colors =
  | "gray-100"
  | "gray-200"
  | "gray-300"
  | "gray-400"
  | "gray-500"
  | "gray-600"
  | "gray-700"
  | "gray-800"
  | "primary-100"
  | "primary-200"
  | "primary-300"
  | "primary-400"
  | "primary-500"
  | "primary-600"
  | "primary-700"
  | "accent-100"
  | "accent-200"
  | "accent-300"
  | "accent-400"
  | "gradient-small"
  | "gradient-big"
  | "gradient-orange";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  loading?: boolean;
  variant?: Variant;
  color?: Colors;
}

export const Button: FC<ButtonProps> = ({
  label,
  className = "",
  disabled = false,
  loading = false,
  variant = "fill",
  color = "primary-300",
  ...props
}) => {
  const baseStyle =
    "py-4 px-8 text-base font-medium rounded-lg";
  const disabledStyle =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "";

  // Safe dynamic colors for Tailwind
  const colorClass = `text-${color} ${variant === "fill" || variant === "outline" ? `bg-${color} ` : ""
    }border-${color}`;

  const buttonStyles = {
    fill: `${colorClass} text-transparent border`, // Make text transparent
    outline: `bg-transparent ${colorClass} border`, // Transparent background, color on text and border
    text: `bg-transparent ${colorClass} border-none`, // Only color on text, transparent background
    none: "bg-transparent text-gray-600 border-none", // Default style
  };

  const currentStyle = buttonStyles[variant];

  return (
    <button
      type="submit"
      className={clsx(baseStyle, currentStyle, disabledStyle, className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex justify-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 4a8 8 0 018 8h4c0-6.627-5.373-12-12-12v4z"
            ></path>
          </svg>
          <span>{label}</span>
        </div>
      ) : (
        label
      )}
    </button>
  );
};
