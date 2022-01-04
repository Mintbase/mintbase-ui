import { ComponentStory, ComponentMeta } from '@storybook/react'
import MbSwitch from '../../components/toggles/switch/Switch'
import { ESize, EState } from '../../consts/properties'

export default {
  title: 'Components/Toggles',
  component: MbSwitch,
  argTypes: {},
} as ComponentMeta<typeof MbSwitch>

const Template: ComponentStory<typeof MbSwitch> = (args) => (
  <MbSwitch {...args} />
)

export const Switch = Template.bind({})
Switch.args = {}
