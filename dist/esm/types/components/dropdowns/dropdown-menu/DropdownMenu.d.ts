/// <reference types="react" />
import './dropdownmenu.css';
interface Item {
    text: string;
    icon?: JSX.Element;
    onClick: () => void;
}
export declare const MbDropdownMenu: ({ items, isOpen, className, }: {
    items: Item[];
    isOpen: boolean;
    className?: string | undefined;
}) => JSX.Element | null;
export {};
