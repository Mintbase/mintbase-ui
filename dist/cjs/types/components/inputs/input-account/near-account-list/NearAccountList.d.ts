/// <reference types="react" />
import { Item } from '../../../dropdowns/dropdown-menu/DropdownMenu';
export declare const MbNearAccountList: ({ subtitle, smallSubtitle, accountExists, saveButton, dropdownItems }: {
    subtitle: string;
    smallSubtitle: string;
    accountExists: (account: string) => Promise<boolean>;
    saveButton?: {
        text: string;
        save: (accounts: string[]) => void;
    } | undefined;
    dropdownItems?: Item[] | undefined;
}) => JSX.Element;
