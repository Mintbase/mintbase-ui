import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbNearAmountAccount } from '../../..'

export default {
  title: 'Components/Inputs',
  component: MbNearAmountAccount,
  argTypes: {},
} as ComponentMeta<typeof MbNearAmountAccount>

const Template: ComponentStory<typeof MbNearAmountAccount> = (args) => (
  <MbNearAmountAccount {...args} />
)

export const TransferList = Template.bind({})
TransferList.args = {
  transferTemplate: { available: 5 },
  totalAmount: 12,
  subtitle: 'Airdrop to multiple accounts',
  smallSubtitle: 'Amount of tokens and recipient account',
}
