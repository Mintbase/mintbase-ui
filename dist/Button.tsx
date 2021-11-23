import React from "react";

enum ButtonState {
  NORMAL,
  DANGER,
  DISABLED,
}

enum ButtonSize {
  REGULAR,
  BIG,
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  loading?: boolean;
  state?: ButtonState;
  size?: ButtonSize;
};

const BASE_BUTTON = `rounded font-normal focus:ring-2 dark:bg-white dark:text-black bg-black text-white`;
const NORMAL = `${BASE_BUTTON} hover:bg-blue-300 dark:hover:bg-blue-100`;
const DISABLED = `${BASE_BUTTON} bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-500 dark:text-black cursor-not-allowed`;
const DANGER = `${BASE_BUTTON} dark:bg-error-300 bg-error-300`;
const REGULAR = `${BASE_BUTTON} btn-regular`;
const BIG = `${BASE_BUTTON} btn-big`;

const styles = {
  [ButtonState.NORMAL]: NORMAL,
  [ButtonState.DANGER]: DANGER,
  [ButtonState.DISABLED]: DISABLED,
  [ButtonSize.REGULAR]: REGULAR,
  [ButtonSize.BIG]: BIG,
};

const LoadingAnimation = () => (
  <div className="animate-pulse flex justify-center">
    <div className="rounded-full bg-white h-8 w-8"></div>
  </div>
);

const Button = ({
  label = "",
  loading = false,
  state = ButtonState.NORMAL,
  size = ButtonSize.REGULAR,
  ...props
}: ButtonProps) => {
  if (props.disabled) state = ButtonState.DISABLED;
  return (
    <button
      type="button"
      className={`${styles[state]} ${styles[size]}`}
      {...props}
    >
      {!loading ? <span>{label}</span> : <LoadingAnimation />}
    </button>
  );
};

export default Button;
