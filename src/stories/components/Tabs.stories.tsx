import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
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
          defaultOptionId: 'newest',
          options: [
            { label: 'Newest', id: 'newest' },
            { label: 'Oldest', id: 'oldest' },
            { label: 'Cheapest', id: 'cheapest' },
            {
              label: 'Most expensive',
              id: 'most-expensive',
            },
          ],
        }}
      >
        <MbTab
          label={<span>NFTs</span>}
          extraFilter={{ label: 'Show only listed' }}
          onExtraFilterChange={(value) => console.log(value)}
        >
          List of NFTs
        </MbTab>
        <MbTab label={<span>Active auctions</span>}>
          List of active auctions
        </MbTab>
        <MbTab label={<span>Latest Listings</span>}>
          List of latest listings
        </MbTab>
      </MbTabs>
    </>
  )
}

export const Tabs = Template.bind({})

Tabs.args = {}
