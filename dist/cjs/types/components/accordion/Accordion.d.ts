import React from 'react';
interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    isOpen?: boolean;
    isFixedAccordion?: boolean;
    hasInfoIcon?: boolean;
}
export declare const MbAccordion: (props: AccordionProps) => JSX.Element;
export {};
