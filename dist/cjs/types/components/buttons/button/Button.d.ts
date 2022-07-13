import React from 'react';
import { ESize, EState, EType } from '../../../consts/properties';
import { Item } from '../../dropdowns/dropdown-menu/DropdownMenu';
import './button.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    btnType?: EType;
    state?: EState;
    size?: ESize;
    customClass?: string;
    dropDownItems?: Item[] | undefined;
}
export declare const MbButton: ({ label, state, size, btnType, dropDownItems, customClass, ...props }: ButtonProps) => JSX.Element;
export {};
