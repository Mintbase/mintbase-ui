/// <reference types="react" />
import { ESize } from '../../../consts/properties';
import { EControlStatus } from '../../inputs/input-field/inputField';
import './TextArea.css';
import './../Input.css';
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    controlStatus: EControlStatus;
    inputSize?: ESize;
    maxChars?: number;
}
export declare const MbTextArea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
