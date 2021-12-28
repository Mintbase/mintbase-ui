import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { ESize } from "../../consts/properties";

export default {
  title: "Components/Inputs",
  component: MbInput,
  argTypes: {
    controlStatus: {
      options: ["normal", "valid", "invalid"],
      control: { type: "radio" },
    },
    inputSize: {
      options: ["small", "medium", "big"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof MbInput>;

const Template: ComponentStory<typeof MbInput> = (args) => (
  <MbInput {...args} />
);

export const Input = Template.bind({});
Input.args = {
  label: "Label",
  hasIcon: true,
  disabled: false,
  placeholder: "Placeholder",
  type: "text",
  required: true,
  controlStatus: EControlStatus.NORMAL,
  inputSize: ESize.MEDIUM,
  onChange: (event: any) => {
    console.log(event.target.value);
  },
};
