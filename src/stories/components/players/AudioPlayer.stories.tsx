import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbAudioPlayer } from '../../../components'
export default {
  title: 'Components/Players',
  component: MbAudioPlayer,
  argTypes: {},
} as ComponentMeta<typeof MbAudioPlayer>

const Template: ComponentStory<typeof MbAudioPlayer> = (args) => (
  <MbAudioPlayer {...args}></MbAudioPlayer>
)

export const Audio = Template.bind({})
Audio.args = {
  src: 'https://arweave.net/iRgcsFwp3l8nG3hld4WEQioP384c5QuFpXxvqqFJloQ',
}
