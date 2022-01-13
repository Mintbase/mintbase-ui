import React from 'react';
export interface MbStatefulButtonProps {
    indicator: JSX.Element;
    content: JSX.Element;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export declare const MbStatefulButton: ({ indicator, content, className, onClick, }: MbStatefulButtonProps) => JSX.Element;
