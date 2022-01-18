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
    { id: 'radio1', label: 'Radio button 1' },
    { id: 'radio2', label: 'Radio button 2' },
  ]

  return (
    <div className="flex">
      {radioButtons.map((btn) => (
        <div className="mb-4" key={btn.id}>
          <MbRadioButton
            {...args}
            isChecked={btn.id === selected}
            handleChange={(id) => setSelected(id)}
            label={btn.label}
            id={btn.id}
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
