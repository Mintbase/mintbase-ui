import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbTab } from '../../components/tabs/tab/Tab'
import { MbTabs } from '../../components/tabs/Tabs'
import MbTabFilters from '../../components/tabs/filters/Filters'
import { useState } from 'react'

export default {
  title: 'Components/Tabs',
  component: MbTabs,
  argTypes: {},
} as ComponentMeta<typeof MbTabs>

const Template: ComponentStory<typeof MbTabs> = (args) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (index) => {
    console.log('jkh')
    setActiveTab(index)
  }
  return (
    <>
      <MbTabs activeTab={activeTab} onTabChange={handleTabChange}>
        <MbTab title="Active auctions">List of active auctions</MbTab>
        <MbTabFilters></MbTabFilters>
        <MbTab title="Active stores">List of active stores</MbTab>
        <MbTabFilters></MbTabFilters>
        <MbTab title="Latest Listings">List of latest listings</MbTab>
      </MbTabs>
    </>
  )
}

export const Tabs = Template.bind({})

Tabs.args = {
  hasFilters: true,
}
