import { InformationCircleIcon } from "@heroicons/react/solid";

type InputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hasIcon?: boolean;
};

const InputField = ({ label = "", hasIcon, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <div className="relative inline-block">
        <input className="p-16 bg-gray-100 big-p text-gray-500" />
        {/* TO DO: WHEN ICONS ADDED CHANGE THIS */}
        {hasIcon && (
          <InformationCircleIcon className="w-5 h-5 absolute top-1/2 translate-y-2/4" />
        )}
      </div>
    </div>
  );
};

export default InputField;
