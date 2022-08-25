import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { MbAccordion, MbIcon, MbMediaImport, MbText } from '../../../components'
import { EIconName, IMAGE_TYPES } from '../../../consts'

export default {
  title: 'Components/Accordion/OpenAccordion',
  component: MbAccordion,
  argTypes: {},
} as ComponentMeta<typeof MbAccordion>

const Template: ComponentStory<typeof MbAccordion> = (args) => {
  const [currentProfileImageFile, setCurrentProfileImageFile] =
    useState<File | null>(null)
  const [currentHeaderImageFile, setCurrentHeaderImageFile] =
    useState<File | null>(null)

  const handleHeaderImageAdd = (file: File) => {
    setCurrentHeaderImageFile(file)
  }

  const handleHeaderImageRemove = () => {
    setCurrentHeaderImageFile(null)
  }

  return (
    <MbAccordion {...args}>
      <div className="p-24">
        <MbText className="p-med-90 mb-8 dark:text-white">Header Image</MbText>
        <MbMediaImport
          acceptedFormats={IMAGE_TYPES}
          handleFileAdd={(f) => handleHeaderImageAdd(f)}
          handleFileRemove={() => handleHeaderImageRemove()}
          uploadedFile={currentHeaderImageFile}
          idealDimensions="1500x500px"
          maxFileSize={1}
        />
      </div>
    </MbAccordion>
  )
}

export const OpenAccordion = Template.bind({})
OpenAccordion.args = {
  title: 'Header Title',
  extraIcon: (
    <MbIcon
      name={EIconName.INFO}
      size="20px"
      color="blue-300"
      darkColor="blue-100"
    />
  ),
  isOpen: true,
  isVerified: false,
}
