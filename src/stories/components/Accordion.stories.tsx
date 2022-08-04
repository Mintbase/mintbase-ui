import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import { EIconName, MbIcon } from '../..'
import { MbAccordion } from '../../components/accordion/Accordion'

export default {
  title: 'Components/Accordion',
  component: MbAccordion,
  argTypes: {},
} as ComponentMeta<typeof MbAccordion>

const Template: ComponentStory<typeof MbAccordion> = (args) => {
  const [img, setImg] = useState(
    <img
      height={200}
      width={200}
      src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
    />
  )

  useEffect(() => {
    setTimeout(
      () =>
        setImg(
          <img
            height={400}
            width={400}
            src="https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU"
          />
        ),
      2000
    )
  })

  return (
    <MbAccordion {...args}>
      <p className="p-24">{img}</p>
    </MbAccordion>
  )
}

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
  isOpen: true,
}
