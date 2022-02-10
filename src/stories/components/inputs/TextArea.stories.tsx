import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ESize } from '../../../consts/properties'
import { MbTextArea, EControlStatus } from '../../../index'

export default {
  title: 'Components/Inputs',
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

export const TextArea = Template.bind({})
TextArea.args = {
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
}
