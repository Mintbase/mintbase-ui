import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbSmallCard } from '../../../components/cards/small/smallCard'
import { ESmallCardType } from '../../../consts/properties'

export default {
  title: 'Components/Cards',
  component: MbSmallCard,
  argTypes: {},
} as ComponentMeta<typeof MbSmallCard>

const Template: ComponentStory<typeof MbSmallCard> = (args) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
    <MbSmallCard {...args} />
  </div>
)

export const Store = Template.bind({})
Store.args = {
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
