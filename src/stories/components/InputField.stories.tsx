import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField, {
  EControlStatus,
} from "../../components/input-fields/inputField";
import { ESize } from "../../constants/properties";

export default {
  title: "Components/Inputs",
  component: InputField,
  argTypes: {
    controlStatus: {
      options: ["empty", "valid", "invalid"],
      control: { type: "radio" },
    },
    inputSize: {
      options: ["small", "medium", "big"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
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
