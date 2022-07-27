import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { useEffect, useState } from 'react'
import { MbTable, MbBody, MbHead } from '../../components/table/Table'

export default {
  title: 'Components/Table',
  component: MbTable,
  argTypes: {},
} as ComponentMeta<typeof MbTable>

const bodyItems = [
  {
    amount: '557.6 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '237 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '2 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '3.4 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '557.6 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '557.6 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '5 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '17.6 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '107.6 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '227.6 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '307.6 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
  {
    amount: '237.6 N',
    account: 'mintbase.near',
    created: '1 hour ago',
    expired: '1 day',
    tx: '...',
  },
]

const Template: ComponentStory<typeof MbTable> = (args) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [items, setItems] = useState<any[]>([])

  const handle = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const paginationProps = {
    currentPage: currentPage,
    itemsPerPage: itemsPerPage,
    totalItems: bodyItems.length,
    onPageChange: handle,
  }
  const changeAmountPerPage = (nr: number) => {
    setItemsPerPage(nr)
  }

  useEffect(() => {
    setItems(
      bodyItems.slice(
        currentPage > 1
          ? currentPage > 2
            ? currentPage * itemsPerPage
            : itemsPerPage
          : 0,
        currentPage > 1
          ? currentPage * itemsPerPage + itemsPerPage
          : itemsPerPage
      )
    )
  }, [currentPage, itemsPerPage])

  return (
    <MbTable
      {...args}
      pagination={paginationProps}
      onAmountItemsChange={changeAmountPerPage}
    >
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
        {items.map((elm, index) => {
          return (
            <tr key={index}>
              <td>{elm.amount}</td>
              <td>{elm.account}</td>
              <td>{elm.created}</td>
              <td>{elm.expired}</td>
              <td>{elm.tx}</td>
            </tr>
          )
        })}
      </MbBody>
    </MbTable>
  )
}

export const Table = Template.bind({})
Table.args = {
  tableTitle: 'Trading History',
}
