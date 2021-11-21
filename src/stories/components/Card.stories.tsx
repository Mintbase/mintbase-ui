import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../../components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Architecture = Template.bind({});
Architecture.args = {};

export const Pulsating = Template.bind({});
Pulsating.args = {
  loading: true,
};

export const XXX = Template.bind({});
XXX.args = {
  title: "sdfsdfsdfs",
};
