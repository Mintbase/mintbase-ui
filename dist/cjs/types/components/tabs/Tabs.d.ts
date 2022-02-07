import React from 'react';
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    activeIndex: number;
    filterOptions?: TFilterOptions;
    onTabChange: (index: number) => void;
    onOrderByChange: (selected: string) => void;
}
declare type TFilterOptions = {
    label: string;
    defaultOptionId?: string;
    options: {
        id: string;
        label: string;
    }[];
};
export declare const MbTabs: (props: TabsProps) => JSX.Element;
export {};
