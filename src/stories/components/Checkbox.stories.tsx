import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import MbCheckbox from '../../components/toggles/checkbox/Checkbox'

export default {
  title: 'Components/Toggles',
  component: MbCheckbox,
  argTypes: {},
} as ComponentMeta<typeof MbCheckbox>

const Template: ComponentStory<typeof MbCheckbox> = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <MbCheckbox
      {...args}
      label="Checkbox 1"
      isChecked={checked}
      handleChange={(val) => setChecked(val)}
    />
  )
}

export const Checkbox = Template.bind({})
Checkbox.args = {
  disabled: false,
}
