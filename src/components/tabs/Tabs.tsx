import React, { useState } from 'react'
import { MbDropdownMenu } from '../dropdowns/dropdown-menu/DropdownMenu'
import { EIconName } from '../../consts/icons'
import { MbIcon } from '../icon/Icon'
import { MbTab } from './Tab'

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  hasFilters?: boolean
  activeIndex: number
  onTabChange: (index: number) => void
  onOrderByChange: (selected: string) => void
}

export const MbTabs = (props: TabsProps) => {
  const [showOrderOpts, setShowOrderOpts] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState('')

  const { children, onTabChange, onOrderByChange, activeIndex } = props

  const options = [
    {
      text: 'Newest',
      onClick: () => {
        setShowOrderOpts(!showOrderOpts)
        setSelectedOrder('Newest')
        onOrderByChange('Newest')
      },
    },
    {
      text: 'Oldest',
      onClick: () => {
        setShowOrderOpts(!showOrderOpts)
        setSelectedOrder('Oldest')
        onOrderByChange('Oldest')
      },
    },
    {
      text: 'Cheapest',
      onClick: () => {
        setShowOrderOpts(!showOrderOpts)
        setSelectedOrder('Cheapest')
        onOrderByChange('Cheapest')
      },
    },
    {
      text: 'Most expensive',
      onClick: () => {
        setShowOrderOpts(!showOrderOpts)
        setSelectedOrder('Most expensive')
        onOrderByChange('Most expensive')
      },
    },
  ]

  if (!children) return <></>
  const allTabs = React.Children.map(children, (child: any) => child)
  const tabsTitle = allTabs?.map((tab) => tab.props.title)
  const tabsContent = allTabs?.map((tab) => tab.props.children)

  return (
    <>
      <div className="relative md:initial">
        <ul className="flex justify-between bg-gray-50 dark:bg-gray-800 px-24 md:px-64 overflow-x-scroll md:overflow-visible no-scrollbar">
          {tabsTitle?.length && (
            <div className="flex items-center space-x-12 sm:space-x-24">
              {tabsTitle.map((title, index) => (
                <li
                  onClick={() => {
                    setSelectedOrder('')
                    onTabChange(index)
                  }}
                  key={index}
                >
                  <MbTab isActive={index === activeIndex} title={title}></MbTab>
                </li>
              ))}
            </div>
          )}

          <li className="flex items-center mx-12 md:hidden">
            <div className="w-0.5 bg-gray-200 dark:bg-gray-600 h-8 rounded"></div>
          </li>

          <div className="flex items-center space-x-12 sm:space-x-24">
            <li
              className={`order-by ${
                selectedOrder ? 'selected' : 'unselected'
              }`}
            >
              <div className="flex p-12 sm:p-16 items-center">
                <div
                  className={`${
                    selectedOrder
                      ? 'text-mb-red'
                      : 'text-blue-300 dark:text-blue-100'
                  } p-med-90 pr-10 whitespace-nowrap`}
                >
                  Show Only Listed
                </div>
              </div>
            </li>

            {props.hasFilters && (
              <li
                className={`order-by ${
                  selectedOrder ? 'selected' : 'unselected'
                } relative`}
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
                <MbDropdownMenu
                  isOpen={showOrderOpts}
                  items={options}
                  className="center-pos hidden md:block"
                />
              </li>
            )}
          </div>
        </ul>
        <MbDropdownMenu
          isOpen={showOrderOpts}
          items={options}
          className="right-0 md:hidden"
        />
      </div>
      {tabsContent?.length &&
        tabsContent?.map((content, index) => {
          return index === activeIndex && <div>{content}</div>
        })}
    </>
  )
}
