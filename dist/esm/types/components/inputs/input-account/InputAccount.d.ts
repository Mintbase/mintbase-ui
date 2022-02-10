import React from 'react';
import { EControlStatus } from '../input-field/inputField';
import './inputaccount.css';
declare type TInputListGroup = {
    amount?: TInput;
    account: TInput;
};
interface TInput extends React.InputHTMLAttributes<HTMLInputElement> {
    status: EControlStatus;
}
interface InputAccountProps {
    maxAmount: number;
    subtitle: string;
    smallSubtitle: string;
    inputList: TInputListGroup[];
    footerTitle: string;
    leftFooterContent?: JSX.Element;
    fieldPercentageLabel?: boolean;
    removeInputHandler: (index: number) => void;
    accountInputChangeHandler: (e: any, index: number) => void;
    amountInputChangeHandler?: (e: any, index: number) => void;
    footerAction: () => void;
}
export declare const MbInputAccount: (props: InputAccountProps) => JSX.Element;
export {};
