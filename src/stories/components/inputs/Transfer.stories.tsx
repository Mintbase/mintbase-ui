import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { EControlStatus, MbInfoCard, MbSplitsInput } from '../../../components'

export default {
  title: 'Components/Inputs',
  component: MbSplitsInput,
  argTypes: {},
} as ComponentMeta<typeof MbSplitsInput>

const Template: ComponentStory<typeof MbSplitsInput> = (args) => (
  <MbSplitsInput {...args} />
)

export const Transfer = Template.bind({})
Transfer.args = {
  transferTemplate: { available: 5 },
  totalAmount: 12,
  subtitle: 'Airdrop to multiple accounts',
  smallSubtitle: 'Amount of tokens and recipient account',
}
