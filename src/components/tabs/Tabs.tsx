import React, { useState } from 'react'
import { MbDropdownMenu } from '../dropdowns/dropdown-menu/DropdownMenu'
import { EIconName } from '../../consts/icons'
import { MbIcon } from '../icon/Icon'
import { MbTab } from './Tab'

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  hasFilters: boolean
}

export const MbTabs = (props: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [showOrderOpts, setShowOrderOpts] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState('')
  const options = [
    {
      text: 'Newest',
      onClick: () => {
        setShowOrderOpts(!showOrderOpts)
        setSelectedOrder('Newest')
      },
    },
    {
      text: 'Oldest',
      onClick: () => {
        setShowOrderOpts(!showOrderOpts)
        setSelectedOrder('Oldest')
      },
    },
    {
      text: 'Cheapest',
      onClick: () => {
        setShowOrderOpts(!showOrderOpts)
        setSelectedOrder('Cheapest')
      },
    },
    {
      text: 'Most expensive',
      onClick: () => {
        setShowOrderOpts(!showOrderOpts)
        setSelectedOrder('Most expensive')
      },
    },
  ]

  if (!props.children) return <></>
  const allTabs = React.Children.map(props.children, (child: any) => child)
  const tabsTitle = allTabs?.map((tab) => tab.props.title)
  const tabsContent = allTabs?.map((tab) => tab.props.children)

  return (
    <>
      <ul className="flex items-center justify-between space-x-12 sm:space-x-24 bg-gray-50 dark:bg-gray-800 px-24 md:px-64">
        {tabsTitle?.length && (
          <div className="flex items-center space-x-12 sm:space-x-24 overflow-x-scroll sm:overflow-visible no-scrollbar">
            {tabsTitle.map((title, index) => (
              <li
                onClick={() => {
                  setSelectedOrder('')
                  setSelectedTab(index)
                }}
                key={index}
              >
                <MbTab isActive={index === selectedTab} title={title}></MbTab>
              </li>
            ))}
          </div>
        )}

        <li className="flex items-center">
          <div className="w-0.5 bg-gray-200 dark:bg-gray-600 h-8 rounded sm:hidden"></div>
        </li>

        <li
          className={`order-by ${
            selectedOrder ? 'selected' : 'unselected'
          } relative justify-end`}
        >
          <div
            className="flex p-12 sm:p-16 items-center"
            onClick={() => setShowOrderOpts(!showOrderOpts)}
          >
            <div
              className={`${
                selectedOrder
                  ? 'text-mb-red'
                  : 'text-blue-300 dark:text-blue-100'
              } p-med-90 pr-10 whitespace-nowrap`}
            >
              {selectedOrder ? selectedOrder : 'Order By'}
            </div>
            <MbIcon
              name={EIconName.ARROW_DROP_DOWN}
              size="16px"
              color="blue-300"
              darkColor="blue-100"
            />
          </div>
          <MbDropdownMenu isOpen={showOrderOpts} items={options} className='left-0' />
        </li>
      </ul>
    </>
    // <>
    //   <div className="inline-flex justify-between bg-gray-50 dark:bg-gray-800 md:px-64 overflow-scroll no-scrollbar">
    //     <div className="flex justify-center md:justify-start items-center space-x-12 sm:space-x-24">
    //       {tabsTitle?.length &&
    //         tabsTitle.map((title, index) => (
    //           <>
    //             <div
    //               onClick={() => {
    //                 setSelectedOrder('')
    //                 setSelectedTab(index)
    //               }}
    //               key={index}
    //             >
    //               <MbTab isActive={index === selectedTab} title={title}></MbTab>
    //             </div>
    //           </>
    //         ))}
    //     </div>
    //     <div className="relative inline-flex">
    //       <div className="w-0.5 bg-gray-200 dark:bg-gray-600 h-8 rounded sm:hidden mx-12"></div>
    //       {props.hasFilters && (
    //         <div>
    //           <div
    //             className={`order-by ${
    //               selectedOrder ? 'selected' : 'unselected'
    //             }`}
    //           >
    //             <div
    //               className="flex p-12 sm:p-16 items-center"
    //               onClick={() => setShowOrderOpts(!showOrderOpts)}
    //             >
    //               <div
    //                 className={`${
    //                   selectedOrder
    //                     ? 'text-mb-red'
    //                     : 'text-blue-300 dark:text-blue-100'
    //                 } p-med-90 pr-10 whitespace-nowrap`}
    //               >
    //                 {selectedOrder ? selectedOrder : 'Order By'}
    //               </div>
    //               <MbIcon
    //                 name={EIconName.ARROW_DROP_DOWN}
    //                 size="16px"
    //                 color="blue-300"
    //                 darkColor="blue-100"
    //               />
    //             </div>
    //           </div>
    //           <MbDropdownMenu isOpen={showOrderOpts} items={options} />
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </>
  )
}
