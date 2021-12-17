import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import MbPagination from "../../components/pagination/Pagination";

export default {
  title: "Components/Pagination",
  component: MbPagination,
  argTypes: {},
} as ComponentMeta<typeof MbPagination>;

const Template = (args: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handle = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <MbPagination
      onPageChange={handle}
      currentPage={currentPage}
      itemsPerPage={15}
      totalItems={150}
    />
  );
};

export const Pagination = Template.bind({});
