import { ComponentMeta, ComponentStory } from "@storybook/react";
import MbTable from "../../components/table/Table";

export default {
  title: "Components/Table",
  component: MbTable,
  argTypes: {},
} as ComponentMeta<typeof MbTable>;

const Template: ComponentStory<typeof MbTable> = (args) => (
  <MbTable {...args}>
    <p>This is the description.</p>
  </MbTable>
);

export const Table = Template.bind({});
Table.args = {
  headers: ["Offer", "From", "Created", "Expires", "TX"],
};
