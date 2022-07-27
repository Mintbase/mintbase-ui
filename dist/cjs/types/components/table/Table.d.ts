import React from 'react';
import { PaginationProps } from '../navigation/pagination/Pagination';
import './table.css';
interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
    tableTitle?: string | JSX.Element;
    pagination?: PaginationProps;
    showItemsPerPage?: boolean;
    onAmountItemsChange?: (page: number) => void;
}
export declare const MbHead: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
export declare const MbBody: (props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
export declare const MbTable: (props: TableProps) => JSX.Element;
export {};
