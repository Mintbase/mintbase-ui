import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbThingCard } from '../../../components/cards/thing/ThingCard'
import { EIconName } from '../../../consts/icons'

export default {
  title: 'Components/Cards',
  component: MbThingCard,
  argTypes: {},
} as ComponentMeta<typeof MbThingCard>

const Template: ComponentStory<typeof MbThingCard> = (args) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
    <MbThingCard {...args} />
    <MbThingCard {...args} />
    <MbThingCard {...args} />
    <MbThingCard {...args} />
    <MbThingCard {...args} />
    <MbThingCard {...args} />
    <MbThingCard {...args} />
  </div>
)

export const Thing = Template.bind({})
Thing.args = {
  cardInfo: {
    upperLeftText: '1',
    upperRightIcon: EIconName.MORE,
    centerElement: (
      <img
        className="h-full object-cover"
        src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
      />
    ),
    isCenterImage: true,
    midLeftText: 'Thing Name',
    midRightText: '10 N',
    botLeftImage:
      'https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU',
    botRightText: '5/10',
    botRightIcon: EIconName.EDITIONS,
    onBotLeftImageClick: () => null,
    onCenterElementClick: () => null,
    onUpperLeftClick: () => null,
    onUpperRightClick: () => null,
  },
  loading: false,
}
