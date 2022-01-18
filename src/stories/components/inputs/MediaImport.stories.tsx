import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { IMAGE_TYPES } from '../../../consts/fileFormats'
import { MbMediaImport } from './../../../components/inputs/media-import/mediaImport'

export default {
  title: 'Components/Inputs',
  component: MbMediaImport,
  argTypes: {},
} as ComponentMeta<typeof MbMediaImport>

const Template: ComponentStory<typeof MbMediaImport> = (args) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [fileUploaded, setFileUploaded] = useState<File>()

  const maxSize = 5

  const checkIfFileIs3D = (file: File) => {
    if (file.name.split('.').pop() === 'glb') {
      return new File([file], file.name, {
        type: 'model/gltf-binary',
      })
    } else if (file.name.split('.').pop() === 'gltf') {
      return new File([file], file.name, {
        type: 'model/gltf+json',
      })
    }

    return file
  }

  const uploadFile = (file: File) => {
    const size = file.size
    const correctFile = checkIfFileIs3D(file)

    if (args.acceptedFormats.includes(correctFile.type)) {
      if (size / 1024 / 1024 <= maxSize) {
        setErrorMessage('')
        setFileUploaded(correctFile)
      } else {
        setErrorMessage(`This file exceeds ${maxSize}mb`)
      }
    } else {
      setErrorMessage('This media type is not accepted')
    }
  }

  const removeFile = () => {
    setFileUploaded(undefined)
  }

  return (
    <MbMediaImport
      isProfileImage
      errorMessage={errorMessage}
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
  acceptedFormats: IMAGE_TYPES,
}
