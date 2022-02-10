/// <reference types="react" />
import './chip.css';
import { ToggleProps } from '../../..';
interface ChipProps extends ToggleProps {
    isChecked: boolean;
    disabled: boolean;
    handleClick: () => void;
}
export declare const MbChip: (props: ChipProps) => JSX.Element;
export {};
