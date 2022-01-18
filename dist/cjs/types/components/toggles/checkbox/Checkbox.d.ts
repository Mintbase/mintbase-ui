/// <reference types="react" />
import './checkbox.css';
import { TToggle } from '../../../types/toggles.type';
interface CheckboxProps extends TToggle {
    handleChange: (checked: boolean) => void;
}
export declare const MbCheckbox: (props: CheckboxProps) => JSX.Element;
export {};
