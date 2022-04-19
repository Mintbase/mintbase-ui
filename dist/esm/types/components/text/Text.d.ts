import React from 'react';
import './text.css';
declare type SemanticHtmlTextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'em';
declare type TextProps = {
    semanticHtmlTag?: SemanticHtmlTextTypes;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const MbText: (props: TextProps) => JSX.Element;
export {};
