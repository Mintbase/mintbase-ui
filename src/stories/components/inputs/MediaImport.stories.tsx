import { ComponentMeta, ComponentStory } from '@storybook/react'
import { EMediaType } from '../../../consts/fileFormats'
import MbMediaImport from './../../../components/inputs/media-import/mediaImport'

export default {
  title: 'Components/Inputs',
  component: MbMediaImport,
  argTypes: {
    acceptedFormats: {
      options: ['image', 'animation', 'document'],
      defaultValue: ['image'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof MbMediaImport>

const Template: ComponentStory<typeof MbMediaImport> = (args) => (
  <MbMediaImport {...args} />
)

export const MediaImport = Template.bind({})
MediaImport.args = {
  isProfileImage: true,
  idealDimensions: '500x500px',
  acceptedFormats: EMediaType.IMAGE,
  maxSize: 5,
  handleUpload: (file: File) => console.log(file),
}
