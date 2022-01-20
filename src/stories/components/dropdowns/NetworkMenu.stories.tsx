import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbNetworkMenu } from '../../../components/dropdowns/network-menu/NetworkMenu'
import { TNetworkOption } from '../../../types/network.type'

export default {
  title: 'Components/Dropdowns/NetworkMenu',
  component: MbNetworkMenu,
  argTypes: {},
} as ComponentMeta<typeof MbNetworkMenu>

const Template: ComponentStory<typeof MbNetworkMenu> = (args) => {
  const options: TNetworkOption[] = [
    {
      label: 'NEAR TESTNET',
      value: 'testnet',
      indicatorColor: 'bg-yellow-500',
    },
    {
      label: 'NEAR MAINNET',
      value: 'mainnet',
      indicatorColor: 'bg-success-300',
    },
    { label: 'ETHEREUM', value: 'testnet', indicatorColor: 'bg-blue-300' },
  ]
  return <div className='inline-block'>
      <MbNetworkMenu {...args} options={options}></MbNetworkMenu>
      </div>
}

export const MenuTemplate = Template.bind({})
