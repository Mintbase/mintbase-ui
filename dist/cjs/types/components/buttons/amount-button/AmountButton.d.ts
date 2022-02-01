/// <reference types="react" />
import './amountbutton.css';
interface AmountButtonProps {
    max: number;
    disabled?: boolean;
    onValueChange: (amount: number) => void;
}
export declare const MbAmountButton: (props: AmountButtonProps) => JSX.Element;
export {};
