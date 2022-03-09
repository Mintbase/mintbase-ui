import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbAmountInput } from '../../../components/inputs/amount-input/AmountInput'

export default {
  title: 'Components/Inputs',
  component: MbAmountInput,
  argTypes: {},
} as ComponentMeta<typeof MbAmountInput>

const Template: ComponentStory<typeof MbAmountInput> = (args) => (
  <div className="w-48">
    <MbAmountInput {...args} />
  </div>
)

export const AmountInput = Template.bind({})
AmountInput.args = {
  maxAmount: 20,
  disabled: true,
  onValueChange: (amount) => console.log(amount),
}
