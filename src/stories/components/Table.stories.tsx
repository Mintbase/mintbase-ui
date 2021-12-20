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
  name: "Trading History",
  headers: ["Offer", "From", "Created", "Expires", "TX"],
  data: [
    {
      col1: "557.6 N",
      col2: "microchipgnu.near",
      col3: "1 hour ago",
      col4: "1 hour ago",
      col5: "...",
    },
  ],
};
