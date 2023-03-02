import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbStoreCardListings } from '../../../components/cards/store/StoreCardListings'

export default {
  title: 'Components/Cards',
  component: MbStoreCardListings,
  argTypes: {},
} as ComponentMeta<typeof MbStoreCardListings>

const Template: ComponentStory<typeof MbStoreCardListings> = (args) => (
  <MbStoreCardListings />
)

export const StoreCardListings = Template.bind({})
