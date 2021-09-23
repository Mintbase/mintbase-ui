import React from "react";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  outlined?: boolean;
  onClick?: () => void;
}

const BASE_BUTTON =
  "rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg";
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-teal-400 border border-teal-400 text-white`;
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-teal-400 text-teal-400`;

const Button = ({
  primary = false,
  size = "medium",
  outlined = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
