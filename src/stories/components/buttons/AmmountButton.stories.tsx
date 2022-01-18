import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbAmountButton } from '../../../components/buttons/amount-button/AmountButton'

export default {
  title: 'Components/Buttons',
  component: MbAmountButton,
  argTypes: {},
} as ComponentMeta<typeof MbAmountButton>

const Template: ComponentStory<typeof MbAmountButton> = (args) => (
  <MbAmountButton {...args} />
)

export const AmountButton = Template.bind({})
AmountButton.args = {
  max: 20,
  disabled: true,
  onValueChange: (amount) => console.log(amount),
}
