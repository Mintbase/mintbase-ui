import React from 'react';
import { ESize, EState, EType } from '../../../consts/properties';
import './button.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    btnType?: EType;
    state?: EState;
    size?: ESize;
}
export declare const MbButton: ({ label, state, size, btnType, ...props }: ButtonProps) => JSX.Element;
export {};
