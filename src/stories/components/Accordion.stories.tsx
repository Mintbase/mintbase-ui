import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbAccordion } from '../../components/accordion/Accordion'
import { MbIcon } from '../../components/icon/Icon'
import { EIconName } from '../../consts'

export default {
  title: 'Components/Accordion',
  component: MbAccordion,
  argTypes: {},
} as ComponentMeta<typeof MbAccordion>

const Template: ComponentStory<typeof MbAccordion> = (args) => (
  <MbAccordion {...args}>
    <p className="p-24">This is the description.</p>
  </MbAccordion>
)

export const Accordion = Template.bind({})
Accordion.args = {
  title: 'Header Title',
  extraIcon: (
    <MbIcon
      name={EIconName.INFO}
      size="20px"
      color="blue-300"
      darkColor="blue-100"
    />
  ),
  isVerified: false,
}
