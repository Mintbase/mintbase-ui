import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbActionText } from '../../components/action-text/ActionText'
import { ESize } from '../../consts/properties'

export default {
  title: 'Components/ActionText',
  component: MbActionText,
  argTypes: {},
} as ComponentMeta<typeof MbActionText>

const Template: ComponentStory<typeof MbActionText> = (args) => (
  <MbActionText {...args} />
)

export const ActionText = Template.bind({})
ActionText.args = {
  size: ESize.MEDIUM,
  text: 'https://mintbase.io',
  iconTab: true,
  iconCopy: true,
  link: 'https://mintbase.io',
}

export const ActionTextTab = Template.bind({})
ActionTextTab.args = {
  size: ESize.MEDIUM,
  text: 'https://mintbase.io',
  iconTab: true,
  link: 'https://mintbase.io',
}

export const ActionTextCopy = Template.bind({})
ActionTextCopy.args = {
  size: ESize.MEDIUM,
  text: 'https://mintbase.io',
  iconCopy: true,
  link: 'https://mintbase.io',
}

export const ActionTextNoIcon = Template.bind({})
ActionTextNoIcon.args = {
  size: ESize.MEDIUM,
  text: 'https://mintbase.io',
}