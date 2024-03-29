import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MbDropdownHoverMenu } from '../../../components/dropdowns/dropdown-hover-menu/DropdownHoverMenu'
import { MbArrowMenu } from '../../../components/arrow-menu/ArrowMenu'

export default {
  title: 'Components/Dropdowns/DropdownHoverMenu',
  component: MbDropdownHoverMenu,
  argTypes: {},
} as ComponentMeta<typeof MbDropdownHoverMenu>

const Template: ComponentStory<typeof MbDropdownHoverMenu> = (args) => (
  <div className="relative">
    <MbDropdownHoverMenu {...args}>
      <ul>
        <li>Activity</li>
        <li>Analytics</li>
        <li>Accounts</li>
        <li>Top Affiliates</li>
      </ul>
    </MbDropdownHoverMenu>
  </div>
)

export const DropdownHoverMenu = Template.bind({})
DropdownHoverMenu.args = {
  title: 'Explore',
  dropdownButton: <MbArrowMenu title="Explore" />,
}
