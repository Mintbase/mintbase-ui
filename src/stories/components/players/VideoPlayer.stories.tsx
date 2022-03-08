import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbVideoPlayer } from '../../../components'
export default {
  title: 'Components/Players',
  component: MbVideoPlayer,
  argTypes: {},
} as ComponentMeta<typeof MbVideoPlayer>

const Template: ComponentStory<typeof MbVideoPlayer> = (args) => (
  <div className="flex justify-center w-64 h-64">
    <MbVideoPlayer {...args}></MbVideoPlayer>
  </div>
)

export const Video = Template.bind({})
Video.args = {
  src: 'https://coldcdn.com/api/cdn/bronil/ig584SKbu2n3y7_UAAoXpLkPnuXMxXfmhFCCN_jgx6M#t=0.1',
}
