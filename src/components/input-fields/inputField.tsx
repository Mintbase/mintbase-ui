import { getFontType } from "../../constants/fontType";
import { EIconName } from "../../constants/icons";
import { ESize } from "../../constants/properties";
import Icon from "../icon/Icon";
import "./inputfield.css";

export enum EControlStatus {
  NORMAL = "normal",
  VALID = "valid",
  INVALID = "invalid",
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hasIcon?: boolean;
  controlStatus: EControlStatus;
  inputSize: ESize;
}

const InputField = ({
  label = "",
  hasIcon,
  controlStatus = EControlStatus.NORMAL,
  inputSize = ESize.MEDIUM,
  ...props
}: InputProps) => {
  const getIconSize = () => {
    return inputSize === "big" ? "24px" : "20px";
  };

  const getLabelFontType = () => {
    switch (inputSize) {
      case "big":
        return "med-p";
      case "medium":
        return "small-p";
      case "small":
        return "big-cap";
    }
  };

  return (
    <>
      {label && (
        <label className={`block mb-8 dark:text-white ${getLabelFontType()}`}>
          {label}{" "}
          {props.required && (
            <span className="text-error-300 dark: text-error-100">*</span>
          )}
        </label>
      )}
      <div
        className={`input-wrapper ${inputSize} flex items-center justify-between rounded ${
          props.disabled ? "disabled" : "default " + controlStatus
        }`}
      >
        <input
          disabled={props.disabled}
          placeholder={props.placeholder}
          type={props.type}
          value={props.value}
          name={props.name}
          required={props.required}
          className={`input-field ${getFontType(inputSize)}`}
          onChange={props.onChange}
        />
        {hasIcon && (
          <div className="flex">
            {controlStatus === EControlStatus.VALID ? (
              <Icon
                name={EIconName.SUCCESS}
                size={getIconSize()}
                color="success-300"
                darkColor="success-100"
              />
            ) : controlStatus === EControlStatus.INVALID ? (
              <Icon
                name={EIconName.ERROR}
                size={getIconSize()}
                color="error-300 "
                darkColor="error-100"
              />
            ) : (
              <Icon
                name={EIconName.INFO}
                size={getIconSize()}
                color="blue-300"
                darkColor="blue-100"
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
