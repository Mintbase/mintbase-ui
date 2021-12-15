import { ComponentMeta, ComponentStory } from "@storybook/react";
import MbText from "../../components/text/Text";

export default {
  title: "Components/Text",
  component: MbText,
  argTypes: {},
} as ComponentMeta<typeof MbText>;

const Template: ComponentStory<typeof MbText> = (args) => (
  <>
    <MbText {...args}>
      This is your simple Text. Change the className to get different styles.
    </MbText>
    <MbText className="p-small-90 mt-4">
      view{" "}
      <a
        className="text-blue-100-35 hover:text-blue-300 cursor-pointer"
        href="/?path=/story/core-typography--typography"
        target="_blank"
      >
        typography
      </a>
    </MbText>
  </>
);

export const Text = Template.bind({});
Text.args = {
  className: "p-big-90",
};
