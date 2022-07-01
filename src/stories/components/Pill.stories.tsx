import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbPill } from '../../components/pills/Pill'
import { EPillTemplate } from '../../consts/pillTemplate'

export default {
  title: 'Components/Pill',
  component: MbPill,
  argTypes: {},
} as ComponentMeta<typeof MbPill>

const Template: ComponentStory<typeof MbPill> = (args) => <MbPill {...args} />

export const Pill = Template.bind({})
Pill.args = {
  text: 'Mint',
  pillTemplate: EPillTemplate.BLACK,
}
