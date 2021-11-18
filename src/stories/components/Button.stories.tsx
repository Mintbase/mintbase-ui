import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Save",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
