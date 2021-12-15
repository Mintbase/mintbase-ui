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
      <Tab title="Active auctions">List of active auctions</Tab>
      <Tab title="Latest Listings">List of latest listings</Tab>
    </Tabs>
  </>
);

export const TabMb = Template.bind({});
TabMb.args = {
  className: "p-big-90",
};
