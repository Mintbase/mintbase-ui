/// <reference types="react" />
import './amountbutton.css';
interface AmountButtonProps {
    max: number;
    disabled: boolean;
    onValueChange: (amount: number) => void;
}
declare const MbAmountButton: (props: AmountButtonProps) => JSX.Element;
export default MbAmountButton;
