import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Action } from "../../components";
import { ESize, EState } from "../../constants/properties";

export default {
  title: "Components/Button",
  component: Action,
  argTypes: {},
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const Actions = Template.bind({});
Actions.args = {
  label: "See Transactions",
  state: EState.ACTIVE,
  size: ESize.MEDIUM,
};
