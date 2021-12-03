import { getFontType } from "../../constants/fontType";
import { EIconName } from "../../constants/icons";
import { ESize } from "../../constants/properties";
import Icon from "../icon/Icon";
import "./inputfield.css";

export enum EControlStatus {
  EMPTY = "empty",
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
        {hasIcon && (
          <div>
            {controlStatus === EControlStatus.VALID ? (
              <Icon
                name={EIconName.SUCCESS}
                size="24px"
                color="success-300"
                darkColor="success-100"
              />
            ) : controlStatus === EControlStatus.INVALID ? (
              <Icon
                name={EIconName.ERROR}
                size="24px"
                color="error-300 "
                darkColor="error-100"
              />
            ) : (
              <Icon
                name={EIconName.INFO}
                size="24px"
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
