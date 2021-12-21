import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef } from "react";
import MbTable, { MbBody, MbHead } from "../../components/table/Table";

export default {
  title: "Components/Table",
  component: MbTable,
  argTypes: {},
} as ComponentMeta<typeof MbTable>;

const Template: ComponentStory<typeof MbTable> = (args) => (
  <MbTable {...args}>
    <MbHead>
      <tr id="headers">
        <td>Offer</td>
        <td>From</td>
        <td>Created</td>
        <td>Expires</td>
        <td>TX</td>
      </tr>
    </MbHead>
    <MbBody>
      <tr id="headers">
        <td>557.6 N</td>
        <td>mintbase.near</td>
        <td>1 hour ago</td>
        <td>1 hour ago</td>
        <td>...</td>
      </tr>
      <tr id="headers">
        <td>222 N</td>
        <td>mintbase.near</td>
        <td>1 hour ago</td>
        <td>3 hours ago</td>
        <td>...</td>
      </tr>
      <tr id="headers">
        <td>104,7 N</td>
        <td>mintbase.near</td>
        <td>1 hour ago</td>
        <td>1 hour ago</td>
        <td>...</td>
      </tr>
    </MbBody>
  </MbTable>
);

export const Table = Template.bind({});
Table.args = {
  title: "Trading History",
  // data: [
  //   {
  //     amount: "557.6 N",
  //     account: "mintbase.near",
  //     created: "1 hour ago",
  //     expires: "1 hour ago",
  //     tx: "...",
  //   },
  //   {
  //     amount: "222 N",
  //     account: "mintbase.near",
  //     created: "3 hours ago",
  //     expires: "4 hours ago",
  //     tx: "...",
  //   },
  //   {
  //     amount: "312,67 N",
  //     account: "mintbase.near",
  //     created: "10 hours ago",
  //     expires: "1 hour ago",
  //     tx: "...",
  //   },
  //   {
  //     amount: "10.6 N",
  //     account: "mintbase.near",
  //     created: "1 hour ago",
  //     expires: "1 hour ago",
  //     tx: "...",
  //   },
  // ],
};
