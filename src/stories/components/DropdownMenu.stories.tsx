import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../../components";
import { DropdownMenu } from "../../components/dropdown-menu/DropdownMenu";
import MbIcon from "../../components/icon/Icon";
import { EIconName } from "../../constants/icons";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  argTypes: {},
} as ComponentMeta<typeof DropdownMenu>;

const defaultItems = [
    { text: 'Docs', icon: <MbIcon name={EIconName.OPEN_NEW_TAB} color={'white'} />, onClick: () => { console.log('pressed menu button 1') } },
    { text: 'Developers', icon: <MbIcon name={EIconName.OPEN_NEW_TAB} color={'white'} />, onClick: () => { console.log('pressed menu button 1') } },
    { text: 'Community', icon: <MbIcon name={EIconName.OPEN_NEW_TAB} color={'white'} />, onClick: () => { console.log('pressed menu button 1') } },
    { text: 'Store', onClick: () => { console.log('pressed menu button 1') } },
    { text: 'Careers', onClick: () => { console.log('pressed menu button 1') } },
    { text: 'Royalties', onClick: () => { console.log('pressed menu button 1') } },
    { text: 'Data', icon: <MbIcon name={EIconName.OPEN_NEW_TAB} color={'white'} />, onClick: () => { console.log('pressed menu button 1') } }
  ]

const DropdownMenuTemplate: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);

export const MenuTemplate = DropdownMenuTemplate.bind({});
MenuTemplate.args = {
  items: defaultItems,
  isOpen: true,
};

const DropdownMenuAnimated: ComponentStory<typeof DropdownMenu> = (args) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
  <div>
    <Button onClick={handleButtonClick} />
    <DropdownMenu {...args} isOpen={isMenuOpen} />
  </div>
);
  }


export const Animated = DropdownMenuAnimated.bind({})
Animated.args = {
  items: defaultItems,
};