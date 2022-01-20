import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbNetworkMenu } from '../../../components/dropdowns/network-menu/NetworkMenu'

export default {
  title: 'Components/Accordion',
  component: MbNetworkMenu,
  argTypes: {},
} as ComponentMeta<typeof MbNetworkMenu>

const Template: ComponentStory<typeof MbNetworkMenu> = (args) => (
  <MbNetworkMenu {...args}>
    <p className="p-24">This is the description.</p>
  </MbNetworkMenu>
)

export const Accordion = Template.bind({})
Accordion.args = {
  title: 'Header Title',
}
