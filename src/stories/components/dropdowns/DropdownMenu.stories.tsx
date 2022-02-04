import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbButton } from '../../../components/buttons/button/Button'
import { MbDropdownMenu } from '../../../components/dropdowns/dropdown-menu/DropdownMenu'
import { MbMenuWrapper } from '../../../components/dropdowns/menu-wrapper/MenuWrapper'
import { MbIcon } from '../../../components/icon/Icon'
import { MbText } from '../../../components/text/Text'
import { EIconName } from '../../../consts/icons'

export default {
  title: 'Components/Dropdowns/DropdownMenu',
  component: MbDropdownMenu,
  argTypes: {},
} as ComponentMeta<typeof MbDropdownMenu>
const defaultItems = [
  {
    content: (
      <MbText className={'p-med-90 text-blue-300 dark:text-blue-100 max-w-80%'}>
        Docs
      </MbText>
    ),
    icon: (
      <MbIcon
        name={EIconName.OPEN_NEW_TAB}
        color={'blue-300'}
        darkColor={'blue-100'}
        size="16px"
      />
    ),
  },
  {
    content: (
      <MbText className={'p-med-90 text-blue-300 dark:text-blue-100 max-w-80%'}>
        Developers
      </MbText>
    ),
    icon: (
      <MbIcon
        name={EIconName.OPEN_NEW_TAB}
        color={'blue-300'}
        darkColor={'blue-100'}
        size="16px"
      />
    ),
  },
  {
    content: (
      <MbText className={'p-med-90 text-blue-300 dark:text-blue-100 max-w-80%'}>
        Community
      </MbText>
    ),
    icon: (
      <MbIcon
        name={EIconName.OPEN_NEW_TAB}
        color={'blue-300'}
        darkColor={'blue-100'}
        size="16px"
      />
    ),
  },
  {
    content: (
      <MbText className={'p-med-90 text-blue-300 dark:text-blue-100 max-w-80%'}>
        Store
      </MbText>
    ),
  },
  {
    content: (
      <MbText className={'p-med-90 text-blue-300 dark:text-blue-100 max-w-80%'}>
        Careers
      </MbText>
    ),
  },
  {
    content: (
      <MbText className={'p-med-90 text-blue-300 dark:text-blue-100 max-w-80%'}>
        Royalties
      </MbText>
    ),
  },
  {
    content: (
      <MbText className={'p-med-90 text-blue-300 dark:text-blue-100 max-w-80%'}>
        Data
      </MbText>
    ),
    icon: (
      <MbIcon
        name={EIconName.OPEN_NEW_TAB}
        color={'blue-300'}
        darkColor={'blue-100'}
        size="16px"
      />
    ),
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
    <div className="text-center">
      <MbMenuWrapper setIsOpen={setIsMenuOpen}>
        <MbButton onClick={handleButtonClick} />
        <MbDropdownMenu {...args} isOpen={isMenuOpen} className="center-pos" />
      </MbMenuWrapper>
    </div>
  )
}

export const Animated = DropdownMenuAnimated.bind({})
Animated.args = {
  items: defaultItems,
}
