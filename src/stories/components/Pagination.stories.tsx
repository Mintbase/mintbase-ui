import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MbPagination from "../../components/pagination/Pagination";

export default {
  title: "Components/Pagination",
  component: MbPagination,
  argTypes: {},
} as ComponentMeta<typeof MbPagination>;

const Template: ComponentStory<typeof MbPagination> = (args) => (
  <MbPagination {...args} />
);

export const Pagination = Template.bind({});
Pagination.args = {
  itemsPerPage: 25,
  totalItems: 500,
  totalPages: 15,
};
