import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { MbSwitch } from '../../../components/toggles/switch/Switch'

export default {
  title: 'Components/Toggles',
  component: MbSwitch,
  argTypes: {},
} as ComponentMeta<typeof MbSwitch>

const Template: ComponentStory<typeof MbSwitch> = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <MbSwitch
      {...args}
      id="switch1"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const Switch = Template.bind({})
Switch.args = {
  disabled: false,
}
