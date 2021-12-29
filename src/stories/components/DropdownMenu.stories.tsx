import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbButton } from '../../components/button/Button'
import { MbDropdownMenu } from '../../components/dropdown-menu/DropdownMenu'
import { MbIcon } from '../../components/icon/Icon'
import { EIconName } from '../../consts/icons'

export default {
  title: 'Components/DropdownMenu',
  component: MbDropdownMenu,
  argTypes: {},
} as ComponentMeta<typeof MbDropdownMenu>
const defaultItems = [
  {
    text: 'Docs',
    icon: (
      <MbIcon name={EIconName.OPEN_NEW_TAB} color={'blue-300'} size="16px" />
    ),
    onClick: () => {
      console.log('pressed menu button 1')
    },
  },
  {
    text: 'Developers',
    icon: (
      <MbIcon name={EIconName.OPEN_NEW_TAB} color={'blue-300'} size="16px" />
    ),
    onClick: () => {
      console.log('pressed menu button 1')
    },
  },
  {
    text: 'Community',
    icon: (
      <MbIcon name={EIconName.OPEN_NEW_TAB} color={'blue-300'} size="16px" />
    ),
    onClick: () => {
      console.log('pressed menu button 1')
    },
  },
  {
    text: 'Store',
    onClick: () => {
      console.log('pressed menu button 1')
    },
  },
  {
    text: 'Careers',
    onClick: () => {
      console.log('pressed menu button 1')
    },
  },
  {
    text: 'Royalties',
    onClick: () => {
      console.log('pressed menu button 1')
    },
  },
  {
    text: 'Data',
    icon: (
      <MbIcon name={EIconName.OPEN_NEW_TAB} color={'blue-300'} size="16px" />
    ),
    onClick: () => {
      console.log('pressed menu button 1')
    },
  },
]

const DropdownMenuTemplate: ComponentStory<typeof MbDropdownMenu> = (args) => (
  <MbDropdownMenu {...args} />
)

export const MenuTemplate = DropdownMenuTemplate.bind({})
MenuTemplate.args = {
  items: defaultItems,
  isOpen: true,
}

const DropdownMenuAnimated: ComponentStory<typeof MbDropdownMenu> = (args) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <MbButton onClick={handleButtonClick} />
      <MbDropdownMenu {...args} isOpen={isMenuOpen} />
    </div>
  )
}

export const Animated = DropdownMenuAnimated.bind({})
Animated.args = {
  items: defaultItems,
}
