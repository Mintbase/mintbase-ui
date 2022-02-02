/// <reference types="react" />
import './InputSelect.css';
interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onValueChange: (value: string) => void;
}
export declare const MbInputSelect: (props: SelectProps) => JSX.Element;
export {};
