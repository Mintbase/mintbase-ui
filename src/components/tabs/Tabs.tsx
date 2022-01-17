import React, { useEffect, useState } from 'react'
import {
  Item,
  MbDropdownMenu,
} from '../../components/dropdown-menu/DropdownMenu'
import { EIconName } from '../../consts/icons'
import { MbIcon } from '../icon/Icon'
import { MbTab } from './Tab'
import './tabs.css'

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  activeTab: number
  onTabChange: (index: number) => void
}

export interface TabFilters {
  tabIndex: number
  filters: TFilter[]
}

type TFilter = {
  options?: string[]
  label: string
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export const MbTabs = (props: TabsProps) => {
  const [showOrderOpts, setShowOrderOpts] = useState(false)
  const [tabFilters, setTabFilters] = useState<TabFilters[]>([])

  const { children, activeTab, onTabChange } = props

  if (!children) return <></>
  const allTabs = React.Children.map(children, (child: any) => child)
  const tabsContent = allTabs?.map((tab) => tab.props.children)

  const handleTabFilters = (filters: TabFilters[], index: number) => {
    if (filters) {
      setTabFilters(filters)
    }
  }

  const hanldeOptionsDropdown = (filter: TFilter): Item[] => {
    if (!(filter.options && filter.onFilterChange)) return []
    return filter.options.map((option) => {
      const isSelected = filter.selectedFilter === option
      return {
        text: option,
        icon: (
          <MbIcon
            name={isSelected ? EIconName.CHECK : EIconName.NONE}
            color={'blue-300'}
            darkColor={'blue-100'}
            size="16px"
          />
        ),
        selected: isSelected,
        onClick: () => {
          setShowOrderOpts(false)
          filter.onFilterChange(isSelected ? '' : option)
        },
      }
    })
  }

  useEffect(() => {
    allTabs?.forEach((tab, index) => {
      handleTabFilters(tab.props.filters, index)
    })
  }, [])

  return (
    <>
      <div className="flex bg-gray-50 dark:bg-gray-800 md:px-64 overflow-scroll">
        <div className="flex justify-center md:justify-start items-center space-x-12 sm:space-x-24">
          {allTabs?.length &&
            allTabs.map((tab, index) => (
              <>
                <div
                  onClick={() => {
                    handleTabFilters(tab.props.filters, index)
                    onTabChange(index)
                  }}
                  key={index}
                >
                  <MbTab
                    isActive={index === activeTab}
                    title={tab.props.title}
                  ></MbTab>
                </div>
              </>
            ))}
        </div>
        <div className="ml-auto flex items-center">
          <div className="w-0.5 bg-gray-200 dark:bg-gray-600 h-8 rounded sm:hidden mx-12"></div>
          {tabFilters.length > 0 && (
            <>
              {tabFilters.map((filter) => {
                if (filter.tabIndex === activeTab) {
                  return filter.filters.map((elm) => {
                    console.log(elm.selectedFilter)
                    return (
                      <div
                        className="ml-12"
                        onMouseEnter={() => {
                          if (elm.options) {
                            setTimeout(() => setShowOrderOpts(true), 500)
                          }
                        }}
                        onMouseLeave={() => {
                          if (elm.options) {
                            setTimeout(() => setShowOrderOpts(false), 500)
                          }
                        }}
                      >
                        <div
                          className={`order-by ${
                            elm.selectedFilter ? 'selected' : 'unselected'
                          }`}
                        >
                          <div
                            className="flex p-12 sm:p-16 items-center"
                            onClick={() => {
                              console.log('clicked')
                              if (elm.options && elm.options?.length > 0) {
                                setShowOrderOpts(!showOrderOpts)
                              } else {
                                elm.onFilterChange(
                                  elm.selectedFilter ? '' : elm.label
                                )
                              }
                            }}
                          >
                            <div
                              className={`${
                                elm.selectedFilter
                                  ? 'text-mb-red'
                                  : 'text-blue-300 dark:text-blue-100'
                              }
                       p-med-90 pr-10 whitespace-nowrap`}
                            >
                              {elm.selectedFilter
                                ? elm.selectedFilter
                                : elm.label}
                            </div>
                            {elm.options && (
                              <MbIcon
                                name={
                                  showOrderOpts
                                    ? EIconName.ARROW_DROP_UP
                                    : EIconName.ARROW_DROP_DOWN
                                }
                                size="16px"
                                color="blue-300"
                                darkColor="blue-100"
                              />
                            )}
                          </div>
                        </div>
                        {elm?.options && elm.options.length > 0 && (
                          <MbDropdownMenu
                            isOpen={showOrderOpts}
                            items={hanldeOptionsDropdown(elm)}
                            className="center-sub-menu"
                          />
                        )}
                      </div>
                    )
                  })
                }
              })}
            </>
          )}
        </div>
      </div>

      {tabsContent?.length &&
        tabsContent?.map((content, index) => {
          return index === activeTab && <div>{content}</div>
        })}
    </>
  )
}
