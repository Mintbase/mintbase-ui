import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbArrowMenu } from '../../components/arrow-menu/ArrowMenu'

export default {
  title: 'Components/ArrowMenu',
  component: MbArrowMenu,
  argTypes: {},
} as ComponentMeta<typeof MbArrowMenu>

const Template: ComponentStory<typeof MbArrowMenu> = (args) => (
  <MbArrowMenu {...args}></MbArrowMenu>
)

export const ArrowMenu = Template.bind({})
ArrowMenu.args = {
  title: 'Explore',
}
