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
  onValueChange: (value) => console.log(value),
}
