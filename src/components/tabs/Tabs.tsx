import React, { useState } from 'react'
import { MbDropdownMenu, Item } from '../dropdowns/dropdown-menu/DropdownMenu'
import { EIconName } from '../../consts/icons'
import { MbIcon } from '../icon/Icon'
import { MbTab, TabProps } from './Tab'
import { MbMenuWrapper } from '../dropdowns/menu-wrapper/MenuWrapper'

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  activeIndex: number
  onTabChange: (index: number) => void
  onOrderByChange: (selected: string) => void
}

type TTab = {
  props: TabProps
}

export const MbTabs = (props: TabsProps) => {
  const [showOrderOpts, setShowOrderOpts] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState('')
  const [selectedFilter, setSelectedFilter] = useState(false)

  const { children, onTabChange, onOrderByChange, activeIndex } = props

  const options: Item[] = [
    {
      text: 'Newest',
      onClick: () => {
        handleOptionSelect('Newest')
      },
      selected: selectedOrder === 'Newest',
      icon:
        selectedOrder === 'Newest' ? (
          <MbIcon
            name={EIconName.CHECK}
            color={'blue-300'}
            darkColor={'blue-100'}
            size="16px"
          />
        ) : undefined,
    },
    {
      text: 'Oldest',
      onClick: () => {
        handleOptionSelect('Oldest')
      },
      selected: selectedOrder === 'Oldest',
      icon:
        selectedOrder === 'Oldest' ? (
          <MbIcon
            name={EIconName.CHECK}
            color={'blue-300'}
            darkColor={'blue-100'}
            size="16px"
          />
        ) : undefined,
    },
    {
      text: 'Cheapest',
      onClick: () => {
        handleOptionSelect('Cheapest')
      },
      selected: selectedOrder === 'Cheapest',
      icon:
        selectedOrder === 'Cheapest' ? (
          <MbIcon
            name={EIconName.CHECK}
            color={'blue-300'}
            darkColor={'blue-100'}
            size="16px"
          />
        ) : undefined,
    },
    {
      text: 'Most expensive',
      onClick: () => {
        handleOptionSelect('Most expensive')
      },
      selected: selectedOrder === 'Most expensive',
      icon:
        selectedOrder === 'Most expensive' ? (
          <MbIcon
            name={EIconName.CHECK}
            color={'blue-300'}
            darkColor={'blue-100'}
            size="16px"
          />
        ) : undefined,
    },
  ]

  const handleOptionSelect = (option: string) => {
    setShowOrderOpts(!showOrderOpts)
    let auxOption = option === selectedOrder ? '' : option
    setSelectedOrder(auxOption)
    onOrderByChange(auxOption)
  }

  const getExtraFiltersIndex = (array: any) => {
    let indexes: number[] = []
    array.map((tab: TTab, index: number) => {
      if (tab.props.extraFilter) indexes.push(index)
    })

    return indexes
  }

  const allTabs = React.Children.map(children, (child: any) => child)
  const tabsTitle = allTabs?.map((tab: TTab) => tab.props.title)
  const tabsContent = allTabs?.map((tab: TTab) => tab.props.children)
  const tabsWithExtraFilter = getExtraFiltersIndex(allTabs)

  if (!children || !allTabs) return <></>

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
            {tabsWithExtraFilter?.length &&
              tabsWithExtraFilter.map((tabIndex) => {
                const currentTab: TTab = allTabs[tabIndex]
                const { extraFilter, onExtraFilterChange } = currentTab.props
                if (tabIndex === activeIndex) {
                  return (
                    <li
                      className={`order-by ${
                        selectedFilter ? 'selected' : 'unselected'
                      }`}
                      onClick={() => {
                        if (!onExtraFilterChange) return
                        setSelectedFilter(!selectedFilter)
                        onExtraFilterChange(!selectedFilter)
                      }}
                      key={tabIndex}
                    >
                      <div className="flex p-12 sm:p-16 items-center">
                        <div
                          className={`${
                            selectedFilter
                              ? 'text-mb-red'
                              : 'text-blue-300 dark:text-blue-100'
                          } p-med-90 pr-10 whitespace-nowrap`}
                        >
                          {extraFilter}
                        </div>
                      </div>
                    </li>
                  )
                }
              })}

            <div>
              <MbMenuWrapper setIsOpen={setShowOrderOpts}>
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
              </MbMenuWrapper>
            </div>
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
          return index === activeIndex && <div key={index}>{content}</div>
        })}
    </>
  )
}
