import React from 'react';
interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    hasInfoIcon?: boolean;
}
export declare const MbAccordion: (props: AccordionProps) => JSX.Element;
export {};
