import { ComponentMeta, ComponentStory } from "@storybook/react";
import MbAccountSelectors from "../../components/input-account-selectors/AccountSelectors";

export default {
  title: "Components/Input",
  component: MbAccountSelectors,
  argTypes: {},
} as ComponentMeta<typeof MbAccountSelectors>;

const Template: ComponentStory<typeof MbAccountSelectors> = (args) => (
  <MbAccountSelectors {...args} />
);

export const AccountSelectors = Template.bind({});
AccountSelectors.args = {
  title: "Header Title",
};
