import React from 'react';
import './Accordion.css';
interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    isOpen?: boolean;
    isFixedAccordion?: boolean;
    isVerifiedToken?: boolean;
    extraIcon?: JSX.Element;
}
export declare const MbAccordion: (props: AccordionProps) => JSX.Element;
export {};
