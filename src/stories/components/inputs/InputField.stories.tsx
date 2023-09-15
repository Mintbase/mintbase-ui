import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ESize } from '../../../consts/properties'
import { MbInput, EControlStatus } from '../../../index'
import { MbIcon, EIconName } from '../../../index'

export default {
  title: 'Components/Inputs/Input',
  component: MbInput,
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
} as ComponentMeta<typeof MbInput>

const Template: ComponentStory<typeof MbInput> = (args) => <MbInput {...args} />

export const Input = Template.bind({})
Input.args = {
  label: 'Label',
  hasIcon: true,
  customIcon: (
    <MbIcon
      name={EIconName.ARROW_DROP_DOWN}
      className={`flex transform transition ease-in-out duration-300`}
      size="16px"
      color="blue-300"
      darkColor="blue-100"
    />
  ),
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
