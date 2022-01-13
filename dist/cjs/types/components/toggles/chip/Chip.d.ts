/// <reference types="react" />
import './chip.css';
import { TToggle } from '../../../types/toggles.type';
interface ChipProps extends TToggle {
    handleClick: () => void;
}
declare const MbChip: (props: ChipProps) => JSX.Element;
export default MbChip;
