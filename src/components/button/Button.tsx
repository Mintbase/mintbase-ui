import React from "react";
import { getFontType } from "../../constants/fontType";
import "./button.css";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
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
  label?: string;
  loading?: boolean;
  btnType?: ButtonType;
  state?: ButtonState;
  size?: ButtonSize;
};

const getLoadingSize = (currentSize: string) => {
  switch (currentSize) {
    case "small":
      return "w-3.5 h-3.5";
    case "medium":
      return "w-4 h-4";
    case "big":
      return "w-5 h-5";
  }
};

const LoadingAnimation = ({ size }: { size: string }) => (
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
  btnType = ButtonType.PRIMARY,
  ...props
}: ButtonProps) => {
  if (props.disabled) state = ButtonState.DISABLED;
  return (
    <button
      type="button"
      className={`${btnType} ${state} ${size} ${getFontType(size)} relative`}
      {...props}
    >
      <span className={loading ? "invisible" : "visible"}>{label}</span>
      {loading && <LoadingAnimation size={size} />}
    </button>
  );
};

export default Button;
