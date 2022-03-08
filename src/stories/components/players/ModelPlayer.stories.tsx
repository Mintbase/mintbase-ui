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
  posterImg: (
    <img
      width={200}
      height={200}
      src="https://coldcdn.com/api/cdn/bronil/S2v4L8aF9bd2Lv4JwJtTXuX-MxxG1yFDP5-feckMv18"
    />
  ),
  modelSrc: 'https://arweave.net/Np7BNpULjMZ4H4R7gyju1agRnblKS6Wfslg_Z3hJiHw',
}
