import React from 'react';
import './tab.css';
export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
    label: JSX.Element;
    isActive?: boolean;
    extraFilter?: string;
    onExtraFilterChange?: (isSelected: boolean) => void;
}
export declare const MbTab: (props: TabProps) => JSX.Element;
