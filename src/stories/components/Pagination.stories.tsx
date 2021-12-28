import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { MbPagination } from '../../components/navigation/pagination/Pagination'

export default {
  title: 'Components/Navigation/Pagination',
  component: MbPagination,
  argTypes: {},
} as ComponentMeta<typeof MbPagination>

const Template: ComponentStory<typeof MbPagination> = (args: any) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handle = (newPage: number) => {
    setCurrentPage(newPage)
  }

  return (
    <MbPagination
      onPageChange={handle}
      currentPage={currentPage}
      itemsPerPage={15}
      totalItems={150}
      {...args}
    />
  )
}

export const Pagination = Template.bind({})

Pagination.args = {
  hasLabel: true,
}
