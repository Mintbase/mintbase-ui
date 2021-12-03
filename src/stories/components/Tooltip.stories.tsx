import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "../../components/icon/Icon";
import MbTooltip from "../../components/tooltip/Tooltip";
import { EIconName } from "../../constants/icons";

export default {
  title: "Components/Tooltip",
  component: MbTooltip,
  argTypes: {},
} as ComponentMeta<typeof MbTooltip>;

const Template: ComponentStory<typeof MbTooltip> = (args) => (
  <MbTooltip {...args} />
);

export const Tooltip = Template.bind({});
Tooltip.args = {
  text: "Tooltip text!",
  component: (
    <Icon size="26px" name={EIconName.MINTBASE} color="mb-blackblue" />
  ),
  place: "left",
};
