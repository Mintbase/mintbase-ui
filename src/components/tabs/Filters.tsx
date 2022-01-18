import { useEffect } from 'react'
import { TFilters } from './Tabs'

const Filters = ({ filters }: { filters?: TFilters }) => {
  if (!filters) return <></>
  const isFixedSelected = filters.selectedFixedFilter !== ''
  const isDropdownSelected = filters.selectedDropdownFilter !== ''

  useEffect(() => {
    console.log('filtrosp:::', filters)
  }, [filters])
  return (
    <>
      <div
        className={`order-by ${isFixedSelected ? 'selected' : 'unselected'}`}
      >
        <div
          className="flex p-12 sm:p-16 items-center"
          onClick={() => {
            if (!filters?.onFixedFilterChange) return
            filters.onFixedFilterChange('Show Only Listed')
          }}
        >
          <div
            className={`${
              isFixedSelected
                ? 'text-mb-red'
                : 'text-blue-300 dark:text-blue-100'
            }
p-med-90 pr-10 whitespace-nowrap`}
          >
            Show Only Listed
          </div>
        </div>
      </div>
    </>
  )
}

export default Filters
