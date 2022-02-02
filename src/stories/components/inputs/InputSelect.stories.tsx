import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbInputSelect } from '../../../components'
import { MbInput } from '../../../index'

export default {
  title: 'Components/Inputs',
  component: MbInputSelect,
  argTypes: {},
} as ComponentMeta<typeof MbInput>

const Template: ComponentStory<typeof MbInputSelect> = (args) => (
  <MbInputSelect {...args} />
)

export const InputSelect = Template.bind({})
InputSelect.args = {
  disabled: false,
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
  onValueChange: (value) => console.log(value),
}
