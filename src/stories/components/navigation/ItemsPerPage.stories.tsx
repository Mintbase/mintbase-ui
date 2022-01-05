import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import { MbItemsPerPage } from '../../../components/navigation/itemsperpage/ItemsPerPage'

export default {
  title: 'Components/Navigation/Items',
  component: MbItemsPerPage,
  argTypes: {},
} as ComponentMeta<typeof MbItemsPerPage>

const Template: ComponentStory<typeof MbItemsPerPage> = (args: any) => {
  const [currentSetup, setCurrentSetUp] = useState(10)
  const handle = (page: number) => {
    setCurrentSetUp(page)
  }
  return (
    <MbItemsPerPage
      {...args}
      onItemsPage={handle}
      currentValue={currentSetup}
    />
  )
}

export const Items = Template.bind({})
Items.args = {
  currentValue: 10,
}
