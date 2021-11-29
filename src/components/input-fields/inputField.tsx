import { InformationCircleIcon } from "@heroicons/react/solid";

type InputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hasIcon?: boolean;
};

const InputField = ({ label = "", hasIcon, ...props }: InputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <div className="p-16 bg-gray-100 flex items-center justify-between rounded">
        <input className="bg-gray-100 big-p text-gray-500 focus:outline-none w-full" />
        {/* TO DO: WHEN ICONS ADDED CHANGE THIS */}
        {hasIcon && (
          <div>
            <InformationCircleIcon className="w-5 h-5" />
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
