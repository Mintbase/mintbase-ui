import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "../../components/icon/Icon";
import Text from "../../components/text/Text";
import MbTooltip from "../../components/tooltip/Tooltip";
import { EIconName } from "../../constants/icons";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    This is your simple text. Change the tag to get different styles.
  </Text>
);

export const SimpleText = Template.bind({});
SimpleText.args = {
  tag: "big-p",
};
