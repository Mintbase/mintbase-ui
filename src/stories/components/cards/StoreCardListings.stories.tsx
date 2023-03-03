import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbStoreCardListings } from '../../../components/cards/store/StoreCardListings'

export default {
  title: 'Components/Cards/StoreCard',
  component: MbStoreCardListings,
  argTypes: {},
} as ComponentMeta<typeof MbStoreCardListings>

const Template: ComponentStory<typeof MbStoreCardListings> = (args) => (
  <MbStoreCardListings {...args} />
)

export const StoreCardListings = Template.bind({})
StoreCardListings.args = {
  storeName: 'Mintbase Store',
  storeImage: 'https://i.imgur.com/gu26H6Z.png',
  totalMinted: '3422',
  owners: '312',
  latestListings: [
    { id: '1', image: 'https://i.imgur.com/gu26H6Z.png', price: '5 N' },
    { id: '1', image: 'https://i.imgur.com/gu26H6Z.png', price: '500 N' },
    { id: '1', image: 'https://i.imgur.com/gu26H6Z.png', price: '3.20 N' },
  ],
}

export const StoreCardListingsLoading = Template.bind({})
StoreCardListingsLoading.args = {
  storeName: 'Mintbase Store',
  storeImage: 'https://i.imgur.com/gu26H6Z.png',
  totalMinted: '3422',
  owners: '312',
  latestListings: [
    { id: '1', image: 'https://i.imgur.com/gu26H6Z.png', price: '5 N' },
    { id: '1', image: 'https://i.imgur.com/gu26H6Z.png', price: '500 N' },
    { id: '1', image: 'https://i.imgur.com/gu26H6Z.png', price: '3.20 N' },
  ],
  loading: true,
}
