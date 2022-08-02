import React from 'react';
import { ESize } from '../../../consts/properties';
import './../Input.css';
import './inputfield.css';
export declare enum EControlStatus {
    NORMAL = "normal",
    VALID = "valid",
    INVALID = "invalid"
}
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hasIcon?: boolean;
    controlStatus: EControlStatus;
    inputSize?: ESize;
    hasPercentageLabel?: boolean;
    maxChars?: number;
    initialCounter?: number;
}
export declare const MbInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};
