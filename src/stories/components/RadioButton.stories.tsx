import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import MbRadioButton from '../../components/toggles/radio-button/RadioButton'

export default {
  title: 'Components/Toggles',
  component: MbRadioButton,
  argTypes: {},
} as ComponentMeta<typeof MbRadioButton>

const Template: ComponentStory<typeof MbRadioButton> = (args) => {
  const [selected, setSelected] = useState('radio1')
  const radioButtons = [
    { value: 'radio1', label: 'Radio button 1' },
    { value: 'radio2', label: 'Radio button 2' },
  ]

  return (
    <>
      {radioButtons.map((btn) => (
        <div className="mb-4" key={btn.value}>
          <MbRadioButton
            {...args}
            isChecked={btn.value === selected}
            handleChange={(id) => {
              setSelected(id)
            }}
            label={btn.label}
            value={btn.value}
          />
        </div>
      ))}
    </>
  )
}

export const RadioButton = Template.bind({})
RadioButton.args = {}
