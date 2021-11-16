import React from "react";

enum ButtonState {
  NORMAL,
  DANGER,
  DISABLED,
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  loading?: boolean;
  state?: ButtonState;
};

const BASE_BUTTON = `rounded py-3 px-12 font-normal focus:ring-2 dark:bg-white dark:text-black bg-black text-white max-w-min w-full`;
const NORMAL = `${BASE_BUTTON} hover:bg-blue-300 dark:hover:bg-blue-100`;
const DISABLED = `${BASE_BUTTON} bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-500 dark:text-black cursor-not-allowed`;
const DANGER = `${BASE_BUTTON} dark:bg-state-error-300 bg-state-error-300`;

const styles = {
  [ButtonState.NORMAL]: NORMAL,
  [ButtonState.DANGER]: DANGER,
  [ButtonState.DISABLED]: DISABLED,
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
  ...props
}: ButtonProps) => {
  if (props.disabled) state = ButtonState.DISABLED;
  return (
    <button type="button" className={styles[state]} {...props}>
      {!loading ? <span>{label}</span> : <LoadingAnimation />}
    </button>
  );
};

export default Button;
