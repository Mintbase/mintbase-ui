import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbInfoCard } from '../../../components/cards/info/InfoCard'
import { MbIcon } from '../../../components/icon/Icon'
import { EIconName } from '../../../consts/icons'

export default {
  title: 'Components/Cards/Info',
  component: MbInfoCard,
  argTypes: {},
} as ComponentMeta<typeof MbInfoCard>

const Template: ComponentStory<typeof MbInfoCard> = (args) => (
  <div className="w-64">
    <MbInfoCard {...args} />
  </div>
)

export const Info = Template.bind({})
Info.args = {
  boxInfo: {
    title: 'Listed Tokens',
    description: '300',
    isNumber: true,
    isVerifiedStore: false,
  },
}

export const InfoWithTitleIcon = Template.bind({})
InfoWithTitleIcon.args = {
  boxInfo: {
    title: 'Listed Tokens',
    titleIcon: <MbIcon color="black" name={EIconName.CIRCLE} />,
    description: '300',
    isNumber: true,
    isVerifiedStore: false,
  },
}

export const InfoLoading = Template.bind({})
InfoLoading.args = {
  boxInfo: {
    loading: true,
    title: 'Listed Tokens',
    description: '300',
  },
}

export const InfoWithIcon = Template.bind({})
InfoWithIcon.args = {
  boxInfo: {
    title: 'Info with icon',
    description: 'Icon',
    upperIcon: (
      <MbIcon
        name={EIconName.INFO}
        size="20px"
        color="blue-300"
        darkColor="blue-100"
      />
    ),
  },
}

export const InfoWithAction = Template.bind({})
InfoWithAction.args = {
  boxInfo: {
    title: 'Info with action',
    description: 'Click me',
    upperIcon: (
      <MbIcon
        name={EIconName.INFO}
        size="20px"
        color="blue-300"
        darkColor="blue-100"
      />
    ),
    isLink: true,
  },
}

export const InfoWithIconDescription = Template.bind({})
InfoWithIconDescription.args = {
  boxInfo: {
    title: 'Info with Icon Description',
    description: 'Icon Description',
    descriptionIcon: EIconName.IMAGE,
  },
}

export const InfoWithImage = Template.bind({})
InfoWithImage.args = {
  boxInfo: {
    title: 'Info with Image',
    description: 'Image Description',
    descriptionIcon: EIconName.NONE,
    descriptionImage:
      'https://i.imgur.com/gu26H6Z.png',
  },
}

export const InfoWithLowerLeftText = Template.bind({})
InfoWithLowerLeftText.args = {
  boxInfo: {
    title: 'Info with lower left text',
    description: 'Icon Description',
    descriptionIcon: EIconName.IMAGE,
    lowerLeftText: 'Text',
  },
}
