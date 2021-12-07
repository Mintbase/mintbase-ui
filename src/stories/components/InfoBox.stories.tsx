import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import InfoBox from "../../components/infobox/InfoBox";
import { EIconName } from "../../constants/icons";

export default {
  title: "Components/InfoBox",
  component: InfoBox,
  argTypes: {},
} as ComponentMeta<typeof InfoBox>;

const Template: ComponentStory<typeof InfoBox> = (args) => (
  <InfoBox {...args} />
);

export const Info = Template.bind({});
Info.args = {
  boxInfo: {
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
    title: "Info with action",
    description: "Click me",
    descriptionIcon: EIconName.IMAGE,
  },
};

export const InfoWithImage = Template.bind({});
InfoWithImage.args = {
  boxInfo: {
    title: "Info with action",
    description: "Click me",
    descriptionIcon: EIconName.NONE,
    descriptionImage:
      "https://coldcdn.com/api/cdn/bronil/JXl58b_p9iYzeFutFC5GcDCjsxppyFt5rRkQt4Su4LU",
  },
};
