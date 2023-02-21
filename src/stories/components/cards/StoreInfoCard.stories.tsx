import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { ESmallCardType } from '../../../consts/properties'
import { MbStoreInfoCard } from '../../../components/cards/store-info/StoreInfoCard'

export default {
  title: 'Components/Cards',
  component: MbStoreInfoCard,
  argTypes: {},
} as ComponentMeta<typeof MbStoreInfoCard>

const Template: ComponentStory<typeof MbStoreInfoCard> = (args) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
    <MbStoreInfoCard {...args} />
  </div>
)

export const StoreInfo = Template.bind({})
StoreInfo.args = {
  cardType: ESmallCardType.STORE,
  card: {
    centerElement: (
      <img
        className="h-full w-full object-cover"
        src="https://i.imgur.com/gu26H6Z.png"
      />
    ),
    title: 'Store Name',
  },
  loading: false,
  isBigStoreCard: false,
}
