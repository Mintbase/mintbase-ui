import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbVideoPlayer } from '../../../components'
export default {
  title: 'Components/Players',
  component: MbVideoPlayer,
  argTypes: {},
} as ComponentMeta<typeof MbVideoPlayer>

const Template: ComponentStory<typeof MbVideoPlayer> = (args) => (
  <MbVideoPlayer {...args}></MbVideoPlayer>
)

export const Audio = Template.bind({})
Audio.args = {
  src: 'https://arweave.net/iRgcsFwp3l8nG3hld4WEQioP384c5QuFpXxvqqFJloQ',
}
