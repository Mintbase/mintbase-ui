/// <reference types="react" />
import './pagination.css';
export interface PaginationProps {
    onPageChange: (currentPage: number) => void;
    totalItems: number;
    currentPage: any;
    itemsPerPage: number;
    hasLabel?: boolean;
}
export declare const MbPagination: (props: PaginationProps) => JSX.Element | null;
