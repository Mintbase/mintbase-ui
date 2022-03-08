import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbModelPlayer } from '../../../components'
export default {
  title: 'Components/Players',
  component: MbModelPlayer,
  argTypes: {},
} as ComponentMeta<typeof MbModelPlayer>

const Template: ComponentStory<typeof MbModelPlayer> = (args) => (
  <MbModelPlayer {...args}></MbModelPlayer>
)

export const Model = Template.bind({})
Model.args = {
  src: 'https://arweave.net/iRgcsFwp3l8nG3hld4WEQioP384c5QuFpXxvqqFJloQ',
}
