import { InformationCircleIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { getFontType } from "../../constants/fontType";
import { ESize } from "../../constants/properties";
import "./inputfield.css";

export enum EControlStatus {
  EMPTY = "empty",
  VALID = "valid",
  INVALID = "invalid",
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hasIcon?: boolean;
  controlStatus: EControlStatus;
  inputSize: ESize;
};

const InputField = ({
  label = "",
  hasIcon,
  controlStatus = EControlStatus.EMPTY,
  inputSize = ESize.MEDIUM,
  ...props
}: InputProps) => {
  return (
    <>
      {label && (
        <label
          className={`block mb-8 dark:text-white ${getFontType(inputSize)}`}
        >
          {label} {props.required && <span>*</span>}
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
        {/* TO DO: WHEN ICONS ADDED CHANGE THIS */}
        {hasIcon && (
          <div>
            {controlStatus === EControlStatus.VALID ? (
              <CheckCircleIcon
                className={`icon w-5 h-5 fill ${controlStatus}`}
              />
            ) : (
              <InformationCircleIcon
                className={`icon w-5 h-5 fill ${controlStatus}`}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
