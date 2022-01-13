/// <reference types="react" />
import { TToggle } from '../../../types/toggles.type';
import './radiobutton.css';
interface RadioButtonProps extends TToggle {
    handleChange: (id: string) => void;
}
declare const MbRadioButton: (props: RadioButtonProps) => JSX.Element;
export default MbRadioButton;
