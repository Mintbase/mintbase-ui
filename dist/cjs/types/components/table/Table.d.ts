import React from 'react';
import { PaginationProps } from '../navigation/pagination/Pagination';
import './table.css';
interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    pagination?: PaginationProps;
    onAmountItemsChange?: (page: number) => void;
}
interface HeaderBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    extraClass?: string;
}
export declare const MbHead: (props: HeaderBodyProps) => JSX.Element;
export declare const MbBody: (props: HeaderBodyProps) => JSX.Element;
export declare const MbTable: (props: TableProps) => JSX.Element;
export {};
