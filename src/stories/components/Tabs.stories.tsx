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
      filters: [
        {
          label: 'Show Only Listed',
          selectedFilter: '',
          onFilterChange: (filter) => handleFilterChange(filter, 0, 0),
        },
        {
          label: 'Order by',
          options: ['Newest', 'Oldest', 'Cheapest', 'Most expensive'],
          selectedFilter: '',
          onFilterChange: (filter) => handleFilterChange(filter, 0, 1),
        },
      ],
    },
  ]

  const handleFilterChange = (
    selectedFilter: string,
    tab: number,
    index: number
  ) => {
    options[tab].filters[index].selectedFilter = selectedFilter
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

Tabs.args = {
  hasFilters: true,
}
