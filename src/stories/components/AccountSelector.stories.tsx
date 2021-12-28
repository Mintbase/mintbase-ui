import { ComponentMeta, ComponentStory } from "@storybook/react";
import MbAccountSelector from "../../components/inputs/account-selector/AccountSelector";

export default {
  title: "Components/Inputs",
  component: MbAccountSelector,
  argTypes: {},
} as ComponentMeta<typeof MbAccountSelector>;

const Template: ComponentStory<typeof MbAccountSelector> = (args) => (
  <MbAccountSelector maxAmount={20} />
);

export const AccountSelector = Template.bind({});
AccountSelector.args = {};
