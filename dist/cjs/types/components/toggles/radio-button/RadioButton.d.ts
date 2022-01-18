/// <reference types="react" />
import { TToggle } from '../../../types/toggles.type';
import './radiobutton.css';
interface RadioButtonProps extends TToggle {
    handleChange: (id: string) => void;
}
export declare const MbRadioButton: (props: RadioButtonProps) => JSX.Element;
export {};
