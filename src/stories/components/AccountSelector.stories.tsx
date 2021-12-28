import { ComponentMeta, ComponentStory } from "@storybook/react";
import MbAccountSelectors from "../../components/inputs/account-selector/AccountSelector";

export default {
  title: "Components/Inputs",
  component: MbAccountSelectors,
  argTypes: {},
} as ComponentMeta<typeof MbAccountSelectors>;

const Template: ComponentStory<typeof MbAccountSelectors> = (args) => (
  <MbAccountSelectors />
);

export const AccountSelector = Template.bind({});
AccountSelector.args = {};
