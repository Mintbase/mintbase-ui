import { useEffect, useMemo, useState } from "react";
import { EIconName } from "../../../constants/icons";
import MbIcon from "../../icon/Icon";
import "./pagination.css";

export interface PaginationProps {
  onPageChange: (currentPage: number) => void;
  totalItems: number;
  currentPage: any;
  itemsPerPage: number;
  hasLabel?: boolean;
}

const DOTS = "...";

const range = (start: any, end: any) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

const MbPagination = (props: PaginationProps) => {
  const {
    onPageChange,
    currentPage,
    itemsPerPage,
    totalItems,
    hasLabel,
  } = props;

  const [paginationRange, setPaginationRange] = useState<any[]>([]);
  const totalPageCount = Math.ceil(totalItems / itemsPerPage);

  useMemo(() => {
    const totalPageNumbers = 6;

    if (totalPageNumbers >= totalPageCount) {
      setPaginationRange(range(1, totalPageCount));
    }

    if (totalPageCount <= 5) return;

    const leftSiblingIndex = Math.max(currentPage - 1, 1);
    const rightSiblingIndex = Math.min(currentPage + 1, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 5;
      let leftRange = range(1, leftItemCount);

      setPaginationRange([...leftRange, DOTS, totalPageCount]);
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 5;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      setPaginationRange([firstPageIndex, DOTS, ...rightRange]);
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      setPaginationRange([
        firstPageIndex,
        DOTS,
        ...middleRange,
        DOTS,
        lastPageIndex,
      ]);
    }
  }, [totalItems, itemsPerPage, currentPage]);

  if (paginationRange) {
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
  }

  const nextPage = () => {
    if (currentPage === totalPageCount) return;
    onPageChange(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-center">
        <div
          className={`${
            currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          } flex items-center`}
          onClick={previousPage}
        >
          <MbIcon
            size="24px"
            name={EIconName.ARROW_LEFT_SMALL}
            color={`${currentPage === 1 ? "gray-400" : "blue-300"}`}
            darkColor={`${currentPage === 1 ? "gray-400" : "blue-100"}`}
          />
        </div>
        {paginationRange && (
          <ul className="px-24 flex justify-center items-center space-x-12 text-blue-300 dark:text-blue-100">
            {paginationRange.map((pageNumber, index) => {
              if (pageNumber === DOTS) {
                return (
                  <li
                    className="page-number p-med-90"
                    onClick={() => {
                      if (index > 1) {
                        onPageChange(currentPage + 3);
                      } else {
                        onPageChange(currentPage - 3);
                      }
                    }}
                  >
                    {DOTS}
                  </li>
                );
              }
              return (
                <li
                  className={`page-number p-med-90 ${
                    pageNumber === currentPage ? "active" : ""
                  }`}
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </li>
              );
            })}
          </ul>
        )}
        <div
          className={`${
            currentPage === totalPageCount
              ? "cursor-not-allowed"
              : "cursor-pointer"
          } flex items-center`}
          onClick={nextPage}
        >
          <MbIcon
            size="24px"
            name={EIconName.ARROW_RIGHT_SMALL}
            color={`${
              currentPage === totalPageCount ? "gray-400" : "blue-300"
            }`}
            darkColor={`${
              currentPage === totalPageCount ? "gray-400" : "blue-100"
            }`}
          />
        </div>
      </div>
      {hasLabel && (
        <div className="text-center pt-24 p-small-90 text-gray-700 dark:text-gray-300">
          Showing {props.itemsPerPage} of {props.totalItems} NFTs
        </div>
      )}
    </div>
  );
};

export default MbPagination;
