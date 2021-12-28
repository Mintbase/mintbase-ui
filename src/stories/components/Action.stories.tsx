import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MbAction } from "../../components/action/Action";
import { ESize, EState } from "../../consts/properties";

export default {
  title: "Components/Action",
  component: MbAction,
  argTypes: {},
} as ComponentMeta<typeof MbAction>;

const Template: ComponentStory<typeof MbAction> = (args) => (
  <MbAction {...args} />
);

export const Action = Template.bind({});
Action.args = {
  label: "See Transactions",
  state: EState.ACTIVE,
  size: ESize.MEDIUM,
};
