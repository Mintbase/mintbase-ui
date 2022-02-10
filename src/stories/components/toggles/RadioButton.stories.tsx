import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { MbRadioButton } from '../../../components/toggles/radio-button/RadioButton'

export default {
  title: 'Components/Toggles',
  component: MbRadioButton,
  argTypes: {},
} as ComponentMeta<typeof MbRadioButton>

const Template: ComponentStory<typeof MbRadioButton> = (args) => {
  const [selected, setSelected] = useState('radio1')
  const radioButtons = [
    { label: 'Radio button 1', value: 'radio1', id: 'radio1' },
    { label: 'Radio button 2', value: 'radio2', id: 'radio2' },
  ]

  return (
    <div className="flex">
      {radioButtons.map((btn) => (
        <div className="mb-4" key={btn.value}>
          <MbRadioButton
            {...args}
            checked={btn.value === selected}
            onChange={(e) => {
              console.log(e.target)
              setSelected(e.target.value)
            }}
            id={btn.id}
            value={btn.value}
            label={btn.label}
          />
        </div>
      ))}
    </div>
  )
}

export const RadioButton = Template.bind({})
RadioButton.args = {
  disabled: false,
}
