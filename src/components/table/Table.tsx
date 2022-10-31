import React from 'react'
import { MbItemsPerPage } from '../navigation/itemsperpage/ItemsPerPage'
import { MbPagination } from '../navigation/pagination/Pagination'
import { PaginationProps } from '../navigation/pagination/Pagination'
import './table.css'
interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  tableTitle?: string | JSX.Element
  pagination?: PaginationProps
  showItemsPerPage?: boolean
  onAmountItemsChange?: (page: number) => void
  loading?: boolean
}

export const MbHead = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { children, className = '' } = props
  return (
    <thead
      className={`headers border-b-2 border-gray-200 text-left dark:border-gray-900 text-gray-700 dark:text-gray-300 p-med-90 ${className}`}
    >
      {children}
    </thead>
  )
}

export const MbBody = (
  props: React.HTMLAttributes<HTMLDivElement> & {
    loading?: boolean
    colsAmount?: number
  }
) => {
  const { children, className = '', loading, colsAmount = 5 } = props

  const cols = Array.from(Array(colsAmount).keys())

  return (
    <tbody className={`dark:text-white p-med-90 body-table ${className}`}>
      {loading
        ? Array.from(Array(5).keys()).map((_, i) => (
            <tr className="animate-pulse" key={`row-${i}`}>
              {cols.map((_, i) => (
                <td key={`col-${i}`}>
                  <div className="h-4 w-12 sm:w-auto rounded bg-gray-600"></div>
                </td>
              ))}
            </tr>
          ))
        : children}
    </tbody>
  )
}

export const MbTable = (props: TableProps) => {
  const {
    tableTitle,
    children,
    pagination,
    onAmountItemsChange,
    showItemsPerPage,
    loading,
  } = props

  return (
    <section className="bg-white dark:bg-gray-850 rounded">
      {tableTitle && (
        <header className="p-24 border-b border-gray-200 dark:border-gray-800 dark:text-white p-big-130">
          {tableTitle}
        </header>
      )}

      <div className="overflow-auto">
        <table className="w-full">{children}</table>
      </div>

      {pagination ? (
        loading ? (
          <div className="py-24 px-24 w-full animate-pulse">
            <div className="h-4 bg-gray-600 rounded"></div>
          </div>
        ) : (
          <footer
            className={`border-t border-gray-200 dark:border-gray-800 py-24 md:px-24 grid items-center ${
              showItemsPerPage ? 'md:grid-cols-3' : ' md:grid-cols-2'
            }`}
          >
            {showItemsPerPage && onAmountItemsChange ? (
              <div className="order-2 md:order-1 flex justify-center md:justify-start">
                <MbItemsPerPage
                  currentValue={pagination.itemsPerPage}
                  onItemsPage={(nr) => onAmountItemsChange(nr)}
                />
              </div>
            ) : null}

            <div
              className={`p-med-90 dark:text-white hidden md:block order-2 ${
                showItemsPerPage ? 'text-center' : 'text-right'
              }`}
            >
              {pagination.itemsPerPage * pagination.currentPage <
              pagination.totalItems
                ? `1 - ${pagination.itemsPerPage}`
                : pagination.totalItems}{' '}
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
        )
      ) : null}
    </section>
  )
}
