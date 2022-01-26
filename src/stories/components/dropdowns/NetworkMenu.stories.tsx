import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbNetworkMenu } from '../../../components/dropdowns/network-menu/NetworkMenu'
import { TNetworkOption } from '../../../types/network.type'
import { MbStatefulButton } from '../../../components/stateful-button/StatefulButton'
import { useState } from 'react'
import { MbText } from '../../../components/text/Text'
import { useEffect } from '@storybook/addons'

export default {
  title: 'Components/Dropdowns/NetworkMenu',
  component: MbNetworkMenu,
  argTypes: {},
} as ComponentMeta<typeof MbNetworkMenu>

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
  { label: 'ETHEREUM', value: 'ethereum', indicatorColor: 'bg-blue-300' },
]

const Template: ComponentStory<typeof MbNetworkMenu> = (args) => (
  <MbNetworkMenu {...args}></MbNetworkMenu>
)

export const MenuTemplate = Template.bind({})
MenuTemplate.args = {
  options: options,
  isOpen: true,
  onOptionChange: () => console.log('open'),
}

const DropdownInlineMenu: ComponentStory<typeof MbNetworkMenu> = (args) => (
  <MbNetworkMenu {...args}></MbNetworkMenu>
)

export const InlineMenu = Template.bind({})
InlineMenu.args = {
  options: options,
  isOpen: true,
  isInline: true,
  onOptionChange: () => console.log('open'),
}

const DropdownMenuAnimated: ComponentStory<typeof MbNetworkMenu> = (args) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<TNetworkOption>(
    options[0]
  )

  const Content = (
    <MbText className={'p-small-90 align-center tracking-widest'}>
      {selectedOption.label}
    </MbText>
  )

  const Indicator = (
    <div className={`w-3 h-3 rounded-full ${selectedOption.indicatorColor}`} />
  )

  const handleMenuChange = (selected: string) => {
    setSelectedOption(options.find((opt) => opt.value === selected))
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="inline-block">
      <MbStatefulButton
        className="space-x-12"
        indicator={Indicator}
        content={Content}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <MbNetworkMenu
        {...args}
        isOpen={isMenuOpen}
        options={options}
        onOptionChange={(value) => handleMenuChange(value)}
      />
    </div>
  )
}

export const Animated = DropdownMenuAnimated.bind({})
