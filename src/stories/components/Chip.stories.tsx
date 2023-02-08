import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MbChips } from '../../components/chips/Chips'
import { ESize, EState } from '../../consts/properties'

export default {
  title: 'Components/Chips',
  component: MbChips,
  argTypes: {},
} as ComponentMeta<typeof MbChips>

const Template: ComponentStory<typeof MbChips> = (args) => (
  <div className="bg-gray-100 h-screen p-24">
    <MbChips {...args}>
      <span>See Transactions</span>
    </MbChips>
  </div>
)

export const Chips = Template.bind({})
