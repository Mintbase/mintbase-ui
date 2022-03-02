/// <reference types="react" />
import './../Input.css';
import './InputTags.css';
interface InputTagsProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    maxTags: number;
    onTagsChange: (tags: string[]) => void;
    onMaxTags: () => void;
}
export declare const MbInputTags: (props: InputTagsProps) => JSX.Element;
export {};
