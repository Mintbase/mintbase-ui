import React from 'react';
export interface MbStatefulButtonProps {
    indicator: JSX.Element;
    content: JSX.Element;
    className?: string;
    hasEmptyStatus?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export declare const MbStatefulButton: ({ indicator, content, className, hasEmptyStatus, onClick, }: MbStatefulButtonProps) => JSX.Element;
