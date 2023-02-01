import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbSmallCard } from '../../../components/cards/small/smallCard'
import { ESmallCardType } from '../../../consts/properties'

export default {
  title: 'Components/Cards/Profile',
  component: MbSmallCard,
  argTypes: {},
} as ComponentMeta<typeof MbSmallCard>

const Template: ComponentStory<typeof MbSmallCard> = (args) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
    <MbSmallCard {...args} />
  </div>
)

export const Profile = Template.bind({})
Profile.args = {
  cardType: ESmallCardType.PROFILE,
  card: {
    centerElement: (
      <img
        className="h-full w-full object-cover"
        src="https://i.imgur.com/gu26H6Z.png"
      />
    ),
    title: 'Account Name',
  },
  loading: false,
}

export const ProfileWithSubtitle = Template.bind({})
ProfileWithSubtitle.args = {
  cardType: ESmallCardType.PROFILE,
  card: {
    centerElement: (
      <img
        className="h-full w-full object-cover"
        src="https://i.imgur.com/gu26H6Z.png"
      />
    ),
    title: 'Account Name',
    subtitle: 'Owner',
  },
  loading: false,
}
