import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField, {
  EControlStatus,
} from "../../components/input-fields/inputField";

export default {
  title: "Components/Inputs",
  component: InputField,
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
  controlStatus: EControlStatus.EMPTY,
  onChange: (event: any) => {
    console.log(event.target.value);
  },
};
