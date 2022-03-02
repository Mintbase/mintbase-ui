import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbInput, MbInputTags } from '../../../index'

export default {
  title: 'Components/Inputs',
  component: MbInputTags,
  argTypes: {},
} as ComponentMeta<typeof MbInput>

const Template: ComponentStory<typeof MbInputTags> = (args) => (
  <MbInputTags {...args} />
)

export const InputTags = Template.bind({})
InputTags.args = {
  label: 'Tags',
  tags: [],
  placeholder: 'Input to add tags'
}
