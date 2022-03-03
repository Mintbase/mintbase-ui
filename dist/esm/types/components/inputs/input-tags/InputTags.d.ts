/// <reference types="react" />
import { ESize } from '../../..';
import './../Input.css';
import './InputTags.css';
interface InputTagsProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    maxTags: number;
    inputSize?: ESize;
    onTagsChange: (tags: string[]) => void;
    onMaxTags: () => void;
}
export declare const MbInputTags: import("react").ForwardRefExoticComponent<InputTagsProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
