import { ComponentMeta, ComponentStory } from "@storybook/react";
import Accordion from "../../components/accordion/Accordion";
import { ESize, EState } from "../../constants/properties";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Accordions = Template.bind({});
Accordions.args = {
  title: "Header Title",
  content: <p>This is the description.</p>,
};
