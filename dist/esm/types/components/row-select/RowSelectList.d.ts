/// <reference types="react" />
export declare const MbRowSelectList: ({ elements, deleteRow, addMinters, removeMinters, }: {
    elements: {
        id: string;
        content: JSX.Element;
        isDisabled: boolean;
    }[];
    deleteRow: (id: string) => void;
    addMinters: () => void;
    removeMinters: (ids: string[]) => void;
}) => JSX.Element;
