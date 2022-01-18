/// <reference types="react" />
import './chip.css';
import { TToggle } from '../../../types/toggles.type';
interface ChipProps extends TToggle {
    handleClick: () => void;
}
export declare const MbChip: (props: ChipProps) => JSX.Element;
export {};
