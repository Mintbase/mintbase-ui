/// <reference types="react" />
import { TInputState } from '../../../../types';
export declare const MbNearAmountAccount: ({ subtitle, smallSubtitle, defaultState, accountExists, defaultAccountsCounter, saveButton, isPercentage, sendFinalState, totalAmount, transferTemplate, }: {
    subtitle: string;
    smallSubtitle: string;
    defaultState: Record<string, TInputState>;
    accountExists: (account: string) => Promise<boolean>;
    defaultAccountsCounter: number;
    saveButton?: {
        text: string;
        save: () => void;
    } | undefined;
    isPercentage?: boolean | undefined;
    sendFinalState?: ((state: Record<string, TInputState>) => void) | undefined;
    totalAmount: number;
    transferTemplate: {
        available: number;
    };
}) => JSX.Element;
