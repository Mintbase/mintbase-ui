/// <reference types="react" />
import { TInputState } from '../../../../types';
export declare const MbNearAmountAccount: ({ subtitle, smallSubtitle, defaultState, accountExists, defaultAccountsCounter, initialUsedAmount, saveButton, isPercentage, sendFinalState, isValidInfo, totalAmount, transferTemplate, isStoreSettings, }: {
    subtitle: string;
    smallSubtitle: string;
    defaultState: Record<string, TInputState>;
    accountExists: (account: string) => Promise<boolean>;
    defaultAccountsCounter: number;
    initialUsedAmount?: number | undefined;
    saveButton?: {
        text: string;
        save: () => boolean;
    } | undefined;
    isPercentage?: boolean | undefined;
    sendFinalState?: ((state: Record<string, TInputState>) => void) | undefined;
    isValidInfo?: ((valid: boolean) => void) | undefined;
    totalAmount: number;
    transferTemplate?: {
        available: number;
    } | undefined;
    isStoreSettings?: boolean | undefined;
}) => JSX.Element;
