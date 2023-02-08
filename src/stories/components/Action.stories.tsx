import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MbAction } from '../../components/action/Action'
import { ESize, EState } from '../../consts/properties'

export default {
  title: 'Components/Action',
  component: MbAction,
  argTypes: {},
} as ComponentMeta<typeof MbAction>

const Template: ComponentStory<typeof MbAction> = (args) => (
  <MbAction {...args}>
    <span>See Transactions</span>
  </MbAction>
)

export const Action = Template.bind({})
Action.args = {
  state: EState.ACTIVE,
  size: ESize.MEDIUM,
}
