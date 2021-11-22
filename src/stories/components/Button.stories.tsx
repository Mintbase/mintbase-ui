import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../components";
import { ButtonSize, ButtonState, ButtonType } from "../../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Primary",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  disabled: false,
  btnType: ButtonType.SECONDARY,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Caution = Template.bind({});
Caution.args = {
  label: "Caution",
  state: ButtonState.CAUTION,
};

export const Big = Template.bind({});
Big.args = {
  label: "Big",
  size: ButtonSize.BIG,
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Medium",
  size: ButtonSize.MEDIUM,
};

export const Small = Template.bind({});
Small.args = {
  label: "Small",
  size: ButtonSize.SMALL,
};
