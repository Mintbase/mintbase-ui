import React from 'react';
import { ESize, EState } from '../../consts/properties';
import './action.css';
interface ActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    state?: EState.ACTIVE | EState.DISABLED;
    size?: ESize;
}
export declare const MbAction: ({ state, size, ...props }: ActionProps) => JSX.Element;
export {};
