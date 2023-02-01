import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { useState } from 'react'
import { ALL_TYPES } from '../../../consts/fileFormats'
import { MbMediaImport } from './../../../components/inputs/media-import/mediaImport'

export default {
  title: 'Components/Inputs',
  component: MbMediaImport,
  argTypes: {},
} as ComponentMeta<typeof MbMediaImport>

const Template: ComponentStory<typeof MbMediaImport> = (args) => {
  const [fileUploaded, setFileUploaded] = useState<File>()

  const uploadFile = (file: File) => {
    setFileUploaded(file)
  }

  const removeFile = () => {
    setFileUploaded(undefined)
  }

  return (
    <MbMediaImport
      isProfileImage
      uploadedFile={fileUploaded as File}
      idealDimensions="500x500px"
      handleFileAdd={uploadFile}
      handleFileRemove={removeFile}
      acceptedFormats={ALL_TYPES}
      maxFileSize={5}
      placeholderImageURL={args.placeholderImageURL}
    />
  )
}

export const MediaImport = Template.bind({})
MediaImport.args = {
}
