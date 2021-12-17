import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { InfoCard } from "../../src";
import { EIconName } from "../../src/constants/icons";

export default {
  title: "Components/Cards/InfoCard",
  component: InfoCard,
  argTypes: {},
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args) => (
  <InfoCard {...args} />
);

export const Info = Template.bind({});
Info.args = {
  boxInfo: {
    title: "Listed Tokens",
    description: "300",
  },
};

export const InfoLoading = Template.bind({});
InfoLoading.args = {
  boxInfo: {
    loading: true,
    title: "Listed Tokens",
    description: "300",
  },
};

export const InfoWithIcon = Template.bind({});
InfoWithIcon.args = {
  boxInfo: {
    title: "Info with icon",
    description: "300",
    upperIcon: EIconName.INFO,
  },
};

export const InfoWithAction = Template.bind({});
InfoWithAction.args = {
  boxInfo: {
    title: "Info with action",
    description: "Click me",
    upperIcon: EIconName.INFO,
    handleDescriptionClick: () => console.log("clicked"),
  },
};

export const InfoWithIconDescription = Template.bind({});
InfoWithIconDescription.args = {
  boxInfo: {
    title: "Info with Icon Description",
    description: "Icon Description",
    descriptionIcon: EIconName.IMAGE,
  },
};

export const InfoWithImage = Template.bind({});
InfoWithImage.args = {
  boxInfo: {
    title: "Info with Image",
    description: "Image Description",
    descriptionIcon: EIconName.NONE,
    descriptionImage:
      "https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU",
  },
};
