/// <reference types="react" />
import './dropdownmenu.css';
export interface Item {
    content: JSX.Element;
    selected?: boolean;
    icon?: JSX.Element;
    onClick?: () => void;
}
interface DropdownMenuProps {
    items: Item[];
    isOpen: boolean;
    className?: string;
}
export declare const MbDropdownMenu: (props: DropdownMenuProps) => JSX.Element | null;
export {};
