/// <reference types="react" />
import './switch.css';
import { TToggle } from '../../../types/toggles.type';
interface SwitchProps extends TToggle {
    handleChange: (checked: boolean) => void;
}
declare const MbSwitch: (props: SwitchProps) => JSX.Element;
export default MbSwitch;
