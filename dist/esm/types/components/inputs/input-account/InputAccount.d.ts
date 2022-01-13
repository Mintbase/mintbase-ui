/// <reference types="react" />
import { EControlStatus } from '../input-field/inputField';
import './inputaccount.css';
declare type TInputListGroup = {
    amount?: TInput;
    account: TInput;
};
declare type TInput = {
    placeholder: string;
    value: string | number;
    status: EControlStatus;
};
interface InputAccountProps {
    maxAmount: number;
    title: string;
    subtitle: string;
    smallSubtitle: string;
    inputList: TInputListGroup[];
    footerTitle: string;
    leftFooterContent?: JSX.Element;
    removeInputHandler: (index: number) => void;
    accountInputChangeHandler: (e: any, index: number) => void;
    amountInputChangeHandler?: (e: any, index: number) => void;
    footerAction: () => void;
}
declare const MbInputAccount: (props: InputAccountProps) => JSX.Element;
export default MbInputAccount;
