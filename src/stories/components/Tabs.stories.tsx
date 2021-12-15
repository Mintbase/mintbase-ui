import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tab from "../../components/tabs/Tab";
import Tabs from "../../components/tabs/Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <>
    <Tabs {...args}>
      <Tab>tes</Tab>
    </Tabs>
  </>
);

export const TabMb = Template.bind({});
TabMb.args = {
  className: "p-big-90",
};
