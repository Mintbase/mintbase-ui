import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InfoCard from "../../components/cards/info/InfoCard";
import { EIconName } from "../../constants/icons";

export default {
  title: "Components/Cards",
  component: InfoCard,
  argTypes: {},
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args) => (
  <InfoCard {...args} />
);

export const Info = Template.bind({});
Info.args = {
  title: "Listed Tokens",
  description: "300",
};
export const InfoWithIcon = Template.bind({});
InfoWithIcon.args = {
  title: "Info with icon",
  description: "300",
  upperIcon: EIconName.INFO,
};

export const InfoWithAction = Template.bind({});
InfoWithAction.args = {
  title: "Info with action",
  description: "Click me",
  upperIcon: EIconName.INFO,
  handleDescriptionClick: () => console.log("clicked"),
};
