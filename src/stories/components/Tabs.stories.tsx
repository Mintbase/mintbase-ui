import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { MbTab } from '../../components/tabs/Tab'
import { MbTabs, TabFilters } from '../../components/tabs/Tabs'

export default {
  title: 'Components/Tabs',
  component: MbTabs,
  argTypes: {},
} as ComponentMeta<typeof MbTabs>

const Template: ComponentStory<typeof MbTabs> = (args) => {
  const [activeTab, setActiveTab] = useState(0)

  const options: TabFilters[] = [
    {
      tabIndex: 0,
      filters: {
        hasFixedFilter: true,
        selectedFixedFilter: '',
        onFixedFilterChange: (option: string) =>
          handleFixedFilterChange(option, 0),
      },
    },
  ]

  const handleFixedFilterChange = (selectedFilter: string, tab: number) => {
    options[tab].filters.selectedFixedFilter = selectedFilter
    console.log(options[tab].filters.selectedFixedFilter)
  }

  const handleDropdownFilterChange = (selectedFilter: string, tab: number) => {
    options[tab].filters.selectedDropdownFilter = selectedFilter
  }

  const handleTabChange = (index) => {
    setActiveTab(index)
  }

  return (
    <>
      <MbTabs activeTab={activeTab} onTabChange={handleTabChange}>
        <MbTab title="Active auctions" filters={options}>
          List of active auctions
        </MbTab>
        <MbTab title="Active stores">List of active stores</MbTab>
        <MbTab title="Latest Listings">List of latest listings</MbTab>
      </MbTabs>
    </>
  )
}

export const Tabs = Template.bind({})
