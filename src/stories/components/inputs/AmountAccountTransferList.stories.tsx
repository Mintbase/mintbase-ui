import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbNearAmountAccount } from '../../..'

export default {
  title: 'Components/Inputs/NearAmountAccount',
  component: MbNearAmountAccount,
  argTypes: {},
} as ComponentMeta<typeof MbNearAmountAccount>

const Template: ComponentStory<typeof MbNearAmountAccount> = (args) => (
  <MbNearAmountAccount {...args} />
)

export const AmountAccountTransferList = Template.bind({})
AmountAccountTransferList.args = {
  transferTemplate: { available: 5 },
  totalAmount: 12,
  subtitle: 'Airdrop to multiple accounts',
  smallSubtitle: 'Amount of tokens and recipient account',
  saveButton: {
    text: 'Save',
    save: () => console.log('saved'),
  },
  accountExists: () => {
    return true
  },
  usedAmount: (val) => {
    console.log(val)
  },
}

export const AmountAccountSplitsList = Template.bind({})
AmountAccountSplitsList.args = {
  subtitle:
    'Split revenue clears after each sale. Needs at least two accounts. The minter will receive 100% of split revenue unless splits are added.',
  smallSubtitle: 'Select up to 25 accounts',
  isPercentage: true,
  accountExists: () => {
    return true
  },
  saveButton: {
    text: 'Save',
    save: () => {
      console.log('saved')
      return true
    },
  },
  defaultAccountsCounter: 1,
  isStoreSettings: false,
  initialUsedAmount: 12,
  defaultState: {
    ['mintbase']: {
      account: { valid: true, value: 'mintbase.near' },
      amount: { valid: true, value: 12 },
      editable: false,
      cleared: false,
    },
  },
  maxAmountPerAccount: 99,
  allowEmptyState: true,
}

export const AmountAccountWithDropdown = Template.bind({})
AmountAccountWithDropdown.args = {
  transferTemplate: { available: 5 },
  totalAmount: 12,
  subtitle: 'Airdrop to multiple accounts',
  smallSubtitle: 'Amount of tokens and recipient account',
  saveButton: {
    text: 'Save',
    save: () => console.log('saved'),
  },
  accountExists: () => {
    return true
  },
  dropdownItems: [
    {
      content: <span>Generate QR Code</span>,
      onClick: () => console.log('asdasd'),
    },
    {
      content: <span>Create Deeplink</span>,
      onClick: () => console.log('asdasd'),
    },
  ],
}
