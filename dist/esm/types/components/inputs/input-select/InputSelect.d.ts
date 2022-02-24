/// <reference types="react" />
import './InputSelect.css';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: TSelectOption[];
    onValueChange: (value: string) => void;
}
declare type TSelectOption = {
    value: string;
    label: string;
};
export declare const MbInputSelect: (props: SelectProps) => JSX.Element;
export {};
