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
      amount: "557.6 N",
      account: "mintbase.near",
      created: "1 hour ago",
      expires: "1 hour ago",
      tx: "...",
    },
    {
      amount: "222 N",
      account: "mintbase.near",
      created: "3 hours ago",
      expires: "4 hours ago",
      tx: "...",
    },
    {
      amount: "312,67 N",
      account: "mintbase.near",
      created: "10 hours ago",
      expires: "1 hour ago",
      tx: "...",
    },
    {
      amount: "10.6 N",
      account: "mintbase.near",
      created: "1 hour ago",
      expires: "1 hour ago",
      tx: "...",
    },
  ],
};
