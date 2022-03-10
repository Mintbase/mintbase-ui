/// <reference types="react" />
import { ESize } from '../../..';
import './AmountInput.css';
interface AmountButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    maxAmount: number;
    btnSize?: ESize;
    onValueChange: (amount: number) => void;
}
export declare const MbAmountInput: import("react").ForwardRefExoticComponent<AmountButtonProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
