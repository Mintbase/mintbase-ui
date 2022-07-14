import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbNearAccountList } from '../../../components'

export default {
  title: 'Components/Inputs/NearAccountList',
  component: MbNearAccountList,
  argTypes: {},
} as ComponentMeta<typeof MbNearAccountList>

const Template: ComponentStory<typeof MbNearAccountList> = (args) => (
  <MbNearAccountList {...args} />
)

export const NearAccountList = Template.bind({})
NearAccountList.args = {
  subtitle: 'Manage NEAR accounts that can mint tokens from this store.',
  smallSubtitle: 'Select up to 100 accounts',
  accountExists: () => {
    return true
  },
  saveButton: {
    text: 'Sign',
    save: () => {
      console.log('saved')
      return true
    },
  },
}

export const NearAccountListWithDropdown = Template.bind({})
NearAccountListWithDropdown.args = {
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
  subtitle: 'Manage NEAR accounts that can mint tokens from this store.',
  smallSubtitle: 'Select up to 100 accounts',
  accountExists: () => {
    return true
  },
  saveButton: {
    text: 'Sign',
    save: () => {
      console.log('saved')
      return true
    },
  },
}
