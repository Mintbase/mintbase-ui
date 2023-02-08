import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbTag } from '../../components/tag/Tag'

export default {
  title: 'Components/Chips',
  component: MbTag,
  argTypes: {},
} as ComponentMeta<typeof MbTag>

const Template: ComponentStory<typeof MbTag> = (args) => (
  <div className="bg-gray-100 h-screen p-24">
    <MbTag {...args}>
      <span>See Transactions</span>
    </MbTag>
  </div>
)

export const Chips = Template.bind({})
