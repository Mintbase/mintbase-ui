/// <reference types="react" />
import { Item } from '../dropdowns/dropdown-menu/DropdownMenu';
export declare const MbRowSelectList: ({ elements, dropdownItems, deleteRow, addMinters, removeMinters, }: {
    elements: {
        id: string;
        content: JSX.Element;
        isDisabled: boolean;
    }[];
    dropdownItems?: Item[] | undefined;
    deleteRow: (id: string) => void;
    addMinters: () => void;
    removeMinters: (ids: string[]) => void;
}) => JSX.Element;
