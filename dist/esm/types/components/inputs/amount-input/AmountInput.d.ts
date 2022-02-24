/// <reference types="react" />
import { ESize } from '../../..';
import './AmountInput.css';
interface AmountButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    maxAmount: number;
    disabled?: boolean;
    btnSize?: ESize;
    onValueChange: (amount: number) => void;
}
export declare const MbAmountInput: (props: AmountButtonProps) => JSX.Element;
export {};
