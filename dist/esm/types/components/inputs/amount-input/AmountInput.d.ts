/// <reference types="react" />
import { ESize } from '../../..';
import { EControlStatus } from '../input-field/inputField';
import './AmountInput.css';
interface AmountButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    maxAmount: number;
    btnSize?: ESize;
    controlStatus?: EControlStatus;
    onValueChange: (amount: number) => void;
}
export declare const MbAmountInput: import("react").ForwardRefExoticComponent<AmountButtonProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
