import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../components";
import {
  ButtonSize,
  ButtonState,
  ButtonType,
} from "../../components/button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  state: ButtonState.ACTIVE,
  btnType: ButtonType.PRIMARY,
  size: ButtonSize.MEDIUM,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  state: ButtonState.ACTIVE,
  btnType: ButtonType.SECONDARY,
  size: ButtonSize.MEDIUM,
};

export const Loading = Template.bind({});
Loading.args = {
  btnType: ButtonType.PRIMARY,
  size: ButtonSize.MEDIUM,
  state: ButtonState.LOADING,
};

export const Caution = Template.bind({});
Caution.args = {
  label: "Caution",
  state: ButtonState.CAUTION,
  btnType: ButtonType.PRIMARY,
  size: ButtonSize.MEDIUM,
};
