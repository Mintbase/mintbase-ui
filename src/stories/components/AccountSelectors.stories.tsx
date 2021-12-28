import { ComponentMeta, ComponentStory } from "@storybook/react";
import MbAccountSelectors from "../../components/inputs/input-account-selectors/AccountSelectors";

export default {
  title: "Components/Inputs",
  component: MbAccountSelectors,
  argTypes: {},
} as ComponentMeta<typeof MbAccountSelectors>;

const Template: ComponentStory<typeof MbAccountSelectors> = (args) => (
  <MbAccountSelectors />
);

export const AccountSelectors = Template.bind({});
AccountSelectors.args = {};
