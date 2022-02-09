import React from 'react';
import { ESize } from '../../../consts/properties';
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
    textarea?: boolean;
    hasPercentageLabel?: boolean;
}
export declare const MbInput: (props: InputProps) => JSX.Element;
export {};
