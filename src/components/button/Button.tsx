import React from "react";
import { getFontType } from "../../constants/fontType";
import "./button.css";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
export enum ButtonState {
  ACTIVE = "active",
  CAUTION = "caution",
  DISABLED = "disabled",
  LOADING = "loading",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big",
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
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

const LoadingAnimation = ({
  size,
  btnType,
}: {
  size: string;
  btnType: string;
}) => (
  <div className="animate-pulse absolute inline w-full left-0">
    <div
      className={`rounded-full ${
        btnType === ButtonType.SECONDARY ? "bg-black" : "bg-white"
      } ${getLoadingSize(size)} m-auto`}
    ></div>
  </div>
);

const Button = ({
  label = "default",
  state = ButtonState.ACTIVE,
  size = ButtonSize.MEDIUM,
  btnType = ButtonType.PRIMARY,
  ...props
}: ButtonProps) => {
  const isLoading = state === ButtonState.LOADING;
  return (
    <button
      type="button"
      className={`${btnType} ${state} ${size} ${getFontType(size)} relative`}
      {...props}
    >
      <span className={isLoading ? "invisible" : "visible"}>{label}</span>
      {isLoading && <LoadingAnimation btnType={btnType} size={size} />}
    </button>
  );
};

export default Button;
