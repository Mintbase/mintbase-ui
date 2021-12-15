import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs from "../../components/tabs/Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <>
    <Tabs {...args}>
      <p>testing this</p>
    </Tabs>
  </>
);

export const Tab = Template.bind({});
Tab.args = {
  className: "p-big-90",
};
