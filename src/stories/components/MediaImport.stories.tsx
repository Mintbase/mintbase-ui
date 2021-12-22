import { ComponentMeta, ComponentStory } from "@storybook/react";
import MbMediaImport from "./../../components/inputs/media-import/mediaImport";

export default {
  title: "Components/Inputs",
  component: MbMediaImport,
  argTypes: {},
} as ComponentMeta<typeof MbMediaImport>;

const Template: ComponentStory<typeof MbMediaImport> = (args) => (
  <MbMediaImport {...args}></MbMediaImport>
);

export const MediaImport = Template.bind({});
MediaImport.args = {
  uploadText: "Upload Profile Image",
  isProfileImage: true,
  acceptedFormats: [".jpeg", ".gif", ".png"],
  idealDimensions: "500x500px",
  maxSize: "500mb",
};
