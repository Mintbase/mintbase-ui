import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { EControlStatus, MbSplitsInput } from '../../../components'

export default {
  title: 'Components/Inputs',
  component: MbSplitsInput,
  argTypes: {},
} as ComponentMeta<typeof MbSplitsInput>

const Template: ComponentStory<typeof MbSplitsInput> = (args) => (
  <MbSplitsInput {...args} />
)

export const Splits = Template.bind({})
Splits.args = {
  subtitle:
    'Split revenue clears after each sale. Needs at least two accounts. The minter will receive 100% of split revenue unless splits are added.',
  smallSubtitle: 'Select up to 25 accounts',
}
