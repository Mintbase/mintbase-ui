import React from 'react';
import './tab.css';
interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}
export declare const MbTab: (props: TabProps) => JSX.Element;
export {};
