import { ComponentStory, ComponentMeta } from "@storybook/react";
import Action, { ActionSize } from "../../components/action/Action";

export default {
  title: "Components/Action",
  component: Action,
  argTypes: {},
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "See Transactions",
  disabled: false,
};

export const Big = Template.bind({});
Big.args = {
  label: "See Transactions",
  size: ActionSize.BIG,
};

export const Small = Template.bind({});
Small.args = {
  label: "See Transactions",
  size: ActionSize.SMALL,
};
