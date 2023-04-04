import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MbDropdownHoverMenu } from '../../../components/dropdowns/dropdown-hover-menu/DropdownHoverMenu'

export default {
  title: 'Components/Dropdowns/DropdownHoverMenu',
  component: MbDropdownHoverMenu,
  argTypes: {},
} as ComponentMeta<typeof MbDropdownHoverMenu>

const Template: ComponentStory<typeof MbDropdownHoverMenu> = (args) => (
  <MbDropdownHoverMenu {...args}>
    <ul>
      <li>Activity</li>
      <li>Analytics</li>
      <li>Accounts</li>
    </ul>
  </MbDropdownHoverMenu>
)

export const DropdownHoverMenu = Template.bind({})
DropdownHoverMenu.args = {
  title: 'Explore',
}
