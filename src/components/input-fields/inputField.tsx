import { InformationCircleIcon, CheckCircleIcon } from "@heroicons/react/solid";

export enum EControlStatus {
  EMPTY = "empty",
  VALID = "valid",
  INVALID = "invalid",
}
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hasIcon?: boolean;
  controlStatus: EControlStatus;
};

const InputField = ({
  label = "",
  hasIcon,
  controlStatus = EControlStatus.EMPTY,
  ...props
}: InputProps) => {
  return (
    <>
      {label && (
        <label className="block mb-8 med-p dark:text-white">
          {label} {props.required && <span>*</span>}
        </label>
      )}
      <div
        className={`p-16 flex items-center justify-between rounded ${
          props.disabled
            ? "bg-gray-200 dark:bg-gray-700"
            : "bg-gray-100 hover:bg-blue-300-15 focus-within:ring-1 focus-within:ring-bg-blue-300-35 dark:bg-gray-900 dark:hover:bg-mb-blackblue dark:focus-within:ring-bg-blue-100-35"
        }`}
      >
        <input
          disabled={props.disabled}
          placeholder={props.placeholder}
          type={props.type}
          value={props.value}
          name={props.name}
          required={props.required}
          className="bg-transparent big-p text-gray-500 focus:outline-none w-full"
          onChange={props.onChange}
        />
        {/* TO DO: WHEN ICONS ADDED CHANGE THIS */}
        {hasIcon && (
          <div>
            {controlStatus === EControlStatus.VALID ? (
              <CheckCircleIcon className="w-5 h-5 fill text-success-300 dark:text-success-100" />
            ) : (
              <InformationCircleIcon
                className={`w-5 h-5 fill ${
                  controlStatus === EControlStatus.INVALID
                    ? "text-error-300 dark:text-error-100"
                    : "text-blue-300 dark:text-blue-100"
                }`}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
