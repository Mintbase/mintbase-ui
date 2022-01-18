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


// {tabFilters.map((filter) => {
//     console.log('...')
//     const { tabIndex, filters } = filter
//     const isFixedSelected = filters?.selectedFixedFilter !== ''
//     const isDropdownSelected =
//       filters?.selectedDropdownFilter !== ''
//     tabIndex === activeTab && filters ? (
//       filters.hasFixedFilter ? (
//         <>
//           <div
//             className={`order-by ${
//               isFixedSelected ? 'selected' : 'unselected'
//             }`}
//           >
//             <div
//               className="flex p-12 sm:p-16 items-center"
//               onClick={() => {
//                 console.log('clicked')
//                 if (!filters.onFixedFilterChange) return
//                 filters.onFixedFilterChange('Show Only Listed')
//               }}
//             >
//               <div
//                 className={`${
//                   isFixedSelected
//                     ? 'text-mb-red'
//                     : 'text-blue-300 dark:text-blue-100'
//                 }
//            p-med-90 pr-10 whitespace-nowrap`}
//               >
//                 Show Only Listed
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <div
//           className="ml-12"
//           onMouseEnter={() =>
//             setTimeout(() => setShowOrderOpts(true), 500)
//           }
//           onMouseLeave={() =>
//             setTimeout(() => setShowOrderOpts(false), 500)
//           }
//         >
//           <div
//             className={`order-by ${
//               isDropdownSelected ? 'selected' : 'unselected'
//             }`}
//           >
//             <div
//               className="flex p-12 sm:p-16 items-center"
//               onClick={() => setShowOrderOpts(!showOrderOpts)}
//             >
//               <div
//                 className={`${
//                   isDropdownSelected
//                     ? 'text-mb-red'
//                     : 'text-blue-300 dark:text-blue-100'
//                 }
//        p-med-90 pr-10 whitespace-nowrap`}
//               >
//                 {isDropdownSelected
//                   ? filters.selectedDropdownFilter
//                   : 'Order by'}
//               </div>
//               <MbIcon
//                 name={
//                   showOrderOpts
//                     ? EIconName.ARROW_DROP_UP
//                     : EIconName.ARROW_DROP_DOWN
//                 }
//                 size="16px"
//                 color="blue-300"
//                 darkColor="blue-100"
//               />
//             </div>
//           </div>
//           <MbDropdownMenu
//             isOpen={showOrderOpts}
//             items={getOptionsDropwdown(
//               filters.selectedDropdownFilter ?? '',
//               filters.onDropdownFilterChange
//             )}
//             className="center-sub-menu"
//           />
//         </div>
//       )
//     ) : (
//       <></>
//     )
//   })}

// (() => {
//     console.log('pah')
//     const filters = tabFilters[activeTab].filters
//     const isFixedSelected = filters?.selectedFixedFilter !== ''
//     const isDropdownSelected = filters?.selectedDropdownFilter !== ''
//     return (
//       <>
        
//       </>
//     )
//   })