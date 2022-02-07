import React from 'react';
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    activeIndex: number;
    filterOptions?: TFilterOptions;
    onTabChange: (index: number) => void;
    onOrderByChange: (selected: string) => void;
}
declare type TFilterOptions = {
    label: string;
    options: {
        id: string;
        label: string;
        isSelected: boolean;
    }[];
};
export declare const MbTabs: (props: TabsProps) => JSX.Element;
export {};
