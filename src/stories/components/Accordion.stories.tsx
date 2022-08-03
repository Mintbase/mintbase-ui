import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { EIconName, MbIcon } from '../..'
import { MbAccordion } from '../../components/accordion/Accordion'

export default {
  title: 'Components/Accordion',
  component: MbAccordion,
  argTypes: {},
} as ComponentMeta<typeof MbAccordion>

const Template: ComponentStory<typeof MbAccordion> = (args) => (
  <MbAccordion {...args}>
    <p className="p-24">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue ligula
      turpis, a egestas urna accumsan in. Aenean aliquam iaculis tortor sit amet
      sollicitudin. Mauris sit amet tristique leo, ut semper leo. Duis consequat
      scelerisque nisl vel pharetra. Nam nec mollis est. Proin accumsan aliquet
      leo vitae gravida. Vestibulum molestie, ante sit amet accumsan
      condimentum, ante leo egestas massa, quis egestas risus turpis ut est.
      Donec vel mauris scelerisque, tincidunt risus quis, vehicula massa. Nullam
      vitae sodales massa, in consectetur nisi. Nam lorem magna, accumsan at
      dignissim eu, imperdiet id nisl. Aenean tempor semper dolor eget dictum.
      Nulla velit lorem, luctus at feugiat imperdiet, ultrices pharetra ipsum.
      Maecenas ullamcorper pulvinar magna ut posuere. Cras aliquet interdum
      varius. Nam imperdiet nibh eu nisl dapibus, quis suscipit nibh mattis.
      Aenean et metus et ligula fermentum commodo eget tristique nisi.
      Suspendisse potenti. Vestibulum placerat, odio nec fringilla pretium,
      mauris felis sodales magna, rhoncus pretium odio enim non risus. Mauris
      dui tortor, sollicitudin vel dolor id, mattis volutpat sapien.
      Pellentesque sit amet lobortis quam. Donec aliquam ante eget elit
      ullamcorper sagittis eget ut tellus. Morbi mi risus, condimentum eu
      pharetra at, porttitor hendrerit felis. Sed rutrum, felis sit amet
      tristique eleifend, odio leo elementum mi, sed lobortis ante felis
      ultricies turpis.
    </p>
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
  isFixedAccordion: false,
  isVerified: false,
}
