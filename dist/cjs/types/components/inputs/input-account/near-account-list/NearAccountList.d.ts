/// <reference types="react" />
export declare const MbNearAccountList: ({ subtitle, smallSubtitle, accountExists, saveButton, }: {
    subtitle: string;
    smallSubtitle: string;
    accountExists: (account: string) => Promise<boolean>;
    saveButton?: {
        text: string;
        save: () => boolean;
    } | undefined;
}) => JSX.Element;
