import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ESize } from '../../../consts/properties'
import { MbTextArea, EControlStatus } from '../../../index'

export default {
  title: 'Components/Inputs/TextArea',
  component: MbTextArea,
  argTypes: {
    controlStatus: {
      options: ['normal', 'valid', 'invalid'],
      control: { type: 'radio' },
    },
    inputSize: {
      options: ['small', 'medium', 'big'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof MbTextArea>

const Template: ComponentStory<typeof MbTextArea> = (args) => (
  <MbTextArea {...args} />
)

export const TextAreaWithCounter = Template.bind({})
TextAreaWithCounter.args = {
  label: 'Label',
  hasIcon: true,
  disabled: false,
  placeholder: 'Placeholder',
  type: 'text',
  required: true,
  textarea: false,
  controlStatus: EControlStatus.NORMAL,
  inputSize: ESize.MEDIUM,
  onChange: (event: any) => {
    console.log(event.target.value)
  },
  maxChars: 10
}
