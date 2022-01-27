import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbNetworkMenu } from '../../../components/dropdowns/network-menu/NetworkMenu'
import { TNetworkOption } from '../../../types/network.type'
import { MbStatefulButton } from '../../../components/stateful-button/StatefulButton'
import { useState } from 'react'
import { MbText } from '../../../components/text/Text'
import { MbColorIndicator } from '../../../components/color-indicator/ColorIndicator'
import { MbMenuWrapper } from '../../../components/dropdowns/menu-wrapper/MenuWrapper'

export default {
  title: 'Components/Dropdowns/NetworkMenu',
  component: MbNetworkMenu,
  argTypes: {},
} as ComponentMeta<typeof MbNetworkMenu>

const options: TNetworkOption[] = [
  {
    label: 'NEAR TESTNET',
    value: 'testnet',
    indicator: <MbColorIndicator childClassName="bg-yellow-500" />,
  },
  {
    label: 'NEAR MAINNET',
    value: 'mainnet',
    indicator: <MbColorIndicator childClassName="bg-success-300" />,
  },
  {
    label: 'ETHEREUM',
    value: 'ethereum',
    indicator: <MbColorIndicator childClassName="bg-blue-300" />,
  },
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
    <MbText className={'cap-big-130 align-center tracking-widest'}>
      {selectedOption.label}
    </MbText>
  )

  const handleMenuChange = (selected: string) => {
    setSelectedOption(options.find((opt) => opt.value === selected))
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="inline-block">
      <MbMenuWrapper setIsOpen={setIsMenuOpen}>
        <MbStatefulButton
          className="space-x-12 p-12"
          indicator={selectedOption.indicator}
          content={Content}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <MbNetworkMenu
          {...args}
          isOpen={isMenuOpen}
          options={options}
          onOptionChange={(value) => handleMenuChange(value)}
        />
      </MbMenuWrapper>
    </div>
  )
}

export const Animated = DropdownMenuAnimated.bind({})
