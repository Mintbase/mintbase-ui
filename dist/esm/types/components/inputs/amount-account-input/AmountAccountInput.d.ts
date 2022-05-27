/// <reference types="react" />
export declare const MbAmountAccountInput: ({ id, validateAccount, validateAmount, handleChangeAmount, handleChangeAccount, handleAddNewItem, handleRemoveItem, isPercentage, isCleared, }: {
    id: string;
    validateAmount: (id: any, amount: number) => boolean;
    validateAccount: (id: any, value: string) => Promise<boolean>;
    handleChangeAmount: (id: string, amount: number) => void;
    handleChangeAccount: (id: string, account: string) => Promise<void>;
    handleAddNewItem: () => void;
    handleRemoveItem: (id: string) => void;
    isPercentage?: boolean | undefined;
    isCleared?: boolean | undefined;
}) => JSX.Element;
