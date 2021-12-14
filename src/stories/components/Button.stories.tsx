import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../../components";
import { ESize, EState, EType } from "../../constants/properties";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  state: EState.ACTIVE,
  btnType: EType.PRIMARY,
  size: ESize.MEDIUM,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  state: EState.ACTIVE,
  btnType: EType.SECONDARY,
  size: ESize.MEDIUM,
};

export const Loading = Template.bind({});
Loading.args = {
  btnType: EType.PRIMARY,
  size: ESize.MEDIUM,
  state: EState.LOADING,
};

export const Caution = Template.bind({});
Caution.args = {
  label: "Caution",
  state: EState.CAUTION,
  btnType: EType.PRIMARY,
  size: ESize.MEDIUM,
};
