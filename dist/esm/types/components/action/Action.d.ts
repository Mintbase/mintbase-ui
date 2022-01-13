import React from 'react';
import { ESize, EState } from '../../consts/properties';
import './action.css';
interface ActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    state?: EState.ACTIVE | EState.DISABLED;
    size?: ESize;
}
export declare const MbAction: ({ label, state, size, ...props }: ActionProps) => JSX.Element;
export {};
