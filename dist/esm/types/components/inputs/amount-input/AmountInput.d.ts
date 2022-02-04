/// <reference types="react" />
import { ESize } from '../../..';
import './AmountInput.css';
interface AmountButtonProps {
    max: number;
    disabled?: boolean;
    size?: ESize;
    onValueChange: (amount: number) => void;
}
export declare const MbAmountInput: (props: AmountButtonProps) => JSX.Element;
export {};
