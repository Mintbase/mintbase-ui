import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import MbChip from '../../components/toggles/chip/Chip'

export default {
  title: 'Components/Toggles',
  component: MbChip,
  argTypes: {},
} as ComponentMeta<typeof MbChip>

const Template: ComponentStory<typeof MbChip> = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <MbChip
      {...args}
      isChecked={checked}
      handleClick={() => setChecked(!checked)}
    />
  )
}

export const Chip = Template.bind({})
Chip.args = {
  label: 'Art',
  disabled: false,
}
