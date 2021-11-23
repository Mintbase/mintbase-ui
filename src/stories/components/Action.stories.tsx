import { ComponentStory, ComponentMeta } from "@storybook/react";
import Action, {
  ActionSize,
  ActionState,
} from "../../components/action/Action";

export default {
  title: "Components/Button",
  component: Action,
  argTypes: {},
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const Actions = Template.bind({});
Actions.args = {
  label: "See Transactions",
  state: ActionState.ACTIVE,
  size: ActionSize.MEDIUM,
};
