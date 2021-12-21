import React, { useState } from "react";
import MbItemsPerPage from "../navigation/itemsperpage/ItemsPerPage";
import MbPagination, {
  PaginationProps,
} from "../navigation/pagination/Pagination";
import "./table.css";
interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  pagination?: PaginationProps;
  onAmountItemsChange?: (page: number) => void;
}

export const MbHead = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <thead className="headers table-fixed border-b-2 border-gray-200 text-left dark:border-gray-900 text-gray-700 dark:text-gray-300 p-med-90">
      {props.children}
    </thead>
  );
};

export const MbBody = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <tbody className="p-24 dark:text-white p-med-90 body-table">
      {props.children}
    </tbody>
  );
};

const MbTable = (props: TableProps) => {
  const { title, children, pagination, onAmountItemsChange } = props;

  const allChildren = React.Children.map(children, (child: any) => child);
  const headers = allChildren?.filter((child) => child.type.name === "MbHead");
  const body = allChildren?.filter((child) => child.type.name === "MbBody");
  console.log(body);

  return (
    <section className="bg-white dark:bg-gray-850">
      <header className="p-24 border-b border-gray-200 dark:border-gray-800 dark:text-white p-big-130">
        {title}
      </header>
      <table className="w-full">
        {headers}
        {body}
      </table>
      {pagination && (
        <footer className="border-t border-gray-200 dark:border-gray-800 p-24 grid md:grid-cols-3 items-center">
          {onAmountItemsChange && (
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
              <MbItemsPerPage
                currentValue={pagination.itemsPerPage}
                onItemsPage={(nr) => onAmountItemsChange(nr)}
              />
            </div>
          )}

          <div className="p-med-90 dark:text-white text-center hidden md:block order-2">
            {pagination.itemsPerPage * pagination.currentPage <
            pagination.totalItems
              ? `1 - ${pagination.itemsPerPage}`
              : pagination.totalItems}{" "}
            of {pagination.totalItems}
          </div>
          <div className="flex justify-center md:justify-end mb-24 md:mb-0 order-1 md:order-3">
            <MbPagination
              currentPage={pagination.currentPage}
              itemsPerPage={pagination.itemsPerPage}
              totalItems={pagination.totalItems}
              onPageChange={pagination.onPageChange}
            />
          </div>
        </footer>
      )}
    </section>
  );
};

export default MbTable;
