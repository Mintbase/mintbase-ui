import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbAccordion } from '../../components/accordion/Accordion'

export default {
  title: 'Components/Accordion',
  component: MbAccordion,
  argTypes: {},
} as ComponentMeta<typeof MbAccordion>

const Template: ComponentStory<typeof MbAccordion> = (args) => (
  <MbAccordion {...args}>
    <p>This is the description.</p>
  </MbAccordion>
)

export const Accordion = Template.bind({})
Accordion.args = {
  title: 'Header Title',
}
