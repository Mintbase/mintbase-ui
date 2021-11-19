import React from "react";

export enum ButtonState {
  NORMAL = "normal",
  CAUTION = "caution",
  DISABLED = "disabled",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big",
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  loading?: boolean;
  state?: ButtonState;
  size?: ButtonSize;
};

const BASE_BUTTON = `rounded focus:ring-2 dark:bg-white dark:text-black bg-black text-white focus:rounded-0.25 focus:border-blue-300 focus:border-opacity-50`;
const NORMAL = `${BASE_BUTTON} hover:bg-blue-300 dark:hover:bg-blue-100`;
const DISABLED = `${BASE_BUTTON} bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-500 dark:text-black cursor-not-allowed`;
const CAUTION = `${BASE_BUTTON} dark:bg-error-300 bg-error-300`;

const styles = {
  [ButtonState.NORMAL]: NORMAL,
  [ButtonState.CAUTION]: CAUTION,
  [ButtonState.DISABLED]: DISABLED,
};

const getLoadingSize = (currentSize: ButtonSize) => {
  switch (currentSize) {
    case "small":
      return "w-3.5 h-3.5";
    case "medium":
      return "w-4 h-4";
    case "big":
      return "w-5 h-5";
  }
};

const LoadingAnimation = ({ size }: { size: ButtonSize }) => (
  <div className="animate-pulse absolute inline w-full left-0">
    <div
      className={`rounded-full bg-white ${getLoadingSize(size)} m-auto`}
    ></div>
  </div>
);

const Button = ({
  label = "default",
  loading = false,
  state = ButtonState.NORMAL,
  size = ButtonSize.MEDIUM,
  ...props
}: ButtonProps) => {
  if (props.disabled) state = ButtonState.DISABLED;
  return (
    <button
      type="button"
      className={`${styles[state]} btn-${size} relative`}
      {...props}
    >
      <span className={loading ? "invisible" : "visible"}>{label}</span>
      {loading && <LoadingAnimation size={size} />}
    </button>
  );
};

export default Button;
