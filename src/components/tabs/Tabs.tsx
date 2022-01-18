import React, { useEffect, useState } from 'react'
import {
  Item,
  MbDropdownMenu,
} from '../../components/dropdown-menu/DropdownMenu'
import { EIconName } from '../../consts/icons'
import { MbIcon } from '../icon/Icon'
import Filters from './Filters'
import { MbTab } from './Tab'
import './tabs.css'

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  activeTab: number
  onTabChange: (index: number) => void
}

export interface TabFilters {
  tabIndex: number
  filters?: TFilters
}

export type TFilters = {
  selectedFixedFilter: string
  hasFixedFilter?: boolean
  onFixedFilterChange?: (option: string) => void
  selectedDropdownFilter?: string
  hasDropdownFilter?: boolean
  onDropdownFilterChange?: (option: string) => void
}

export const MbTabs = (props: TabsProps) => {
  const [showOrderOpts, setShowOrderOpts] = useState(false)
  const [tabFilters, setTabFilters] = useState<TabFilters[]>([])

  const { children, activeTab, onTabChange } = props

  if (!children) return <></>
  const allTabs = React.Children.map(children, (child: any) => child)
  const tabsContent = allTabs?.map((tab) => tab.props.children)

  const handleTabFilters = (filters: TabFilters[]) => {
    console.log(filters)
    if (filters) {
      setTabFilters(filters)
    }
  }

  const getOptionsDropwdown = (
    selectedFilter: string,
    onFilterChange: any
  ): Item[] => {
    return ['Newest', 'Oldest', 'Cheapest', 'Most expensive'].map((option) => {
      const isSelected = selectedFilter === option
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
          onFilterChange(isSelected ? '' : option)
        },
      }
    })
  }

  useEffect(() => {
    allTabs?.forEach((tab) => {
      handleTabFilters(tab.props.filters)
    })
  }, [tabFilters])

  return (
    <>
      <div className="flex bg-gray-50 dark:bg-gray-800 md:px-64 overflow-scroll">
        <div className="flex justify-center md:justify-start items-center space-x-12 sm:space-x-24">
          {allTabs?.length &&
            allTabs.map((tab, index) => (
              <>
                <div
                  onClick={() => {
                    handleTabFilters(tab.props.filters)
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
          {tabFilters &&
            tabFilters.length > 0 &&
            tabFilters[activeTab] &&
            tabFilters[activeTab].filters && (
              <Filters filters={tabFilters[activeTab].filters} />
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
