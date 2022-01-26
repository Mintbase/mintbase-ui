import React from 'react';
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    activeIndex: number;
    onTabChange: (index: number) => void;
    onOrderByChange: (selected: string) => void;
}
export declare const MbTabs: (props: TabsProps) => JSX.Element;
export {};
