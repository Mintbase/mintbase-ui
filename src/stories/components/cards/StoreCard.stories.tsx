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
  <MbSmallCard {...args} />
)

export const Store = Template.bind({})
Store.args = {
  cardType: ESmallCardType.STORE,
  card: {
    centerElement: (
      <img
        className="h-full w-full object-cover"
        src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
      />
    ),
    title: 'Store Name',
  },
  loading: false,
}
