import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { MbTab } from '../../components/tabs/Tab'
import { MbTabs } from '../../components/tabs/Tabs'

export default {
  title: 'Components/Tabs',
  component: MbTabs,
  argTypes: {},
} as ComponentMeta<typeof MbTabs>

const Template: ComponentStory<typeof MbTabs> = (args) => {
  const [tab, setTab] = useState(0)
  return (
    <>
      <MbTabs
        activeIndex={tab}
        onTabChange={(tab) => setTab(tab)}
        onOrderByChange={(selectedOrder) => console.log(selectedOrder)}
        filterOptions={{
          label: 'Order by',
          options: [
            { label: 'Newest', id: 'newest', isSelected: false },
            { label: 'Cheapest', id: 'cheapest', isSelected: false },
            {
              label: 'Most expensive',
              id: 'most-expensive',
              isSelected: false,
            },
          ],
        }}
      >
        <MbTab
          title="NFTs"
          extraFilter="Show only listed"
          onExtraFilterChange={(value) => console.log(value)}
        >
          List of NFTs
        </MbTab>
        <MbTab title="Active auctions">List of active auctions</MbTab>
        <MbTab title="Latest Listings">List of latest listings</MbTab>
      </MbTabs>
    </>
  )
}

export const Tabs = Template.bind({})

Tabs.args = {}
