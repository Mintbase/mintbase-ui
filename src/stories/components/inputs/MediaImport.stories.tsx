import { ComponentMeta, ComponentStory } from '@storybook/react'
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

  const maxSize = 5

  const uploadFile = (file: File) => {
    setFileUploaded(file)
  }

  const removeFile = () => {
    setFileUploaded(undefined)
  }

  return (
    <MbMediaImport
      isProfileImage
      uploadedFile={fileUploaded}
      idealDimensions="500x500px"
      maxSize={maxSize}
      handleFileAdd={uploadFile}
      handleFileRemove={removeFile}
      {...args}
    />
  )
}

export const MediaImport = Template.bind({})
MediaImport.args = {
  acceptedFormats: ALL_TYPES,
}
