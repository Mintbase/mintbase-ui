import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { MbInputAccount } from '../../../components/inputs/input-account/InputAccount'
import { EControlStatus } from '../../../components/inputs/input-field/inputField'

export default {
  title: 'Components/Inputs',
  component: MbInputAccount,
  argTypes: {},
} as ComponentMeta<typeof MbInputAccount>

const Template: ComponentStory<typeof MbInputAccount> = (args) => {
  const [inputList, setInputList] = useState([
    {
      account: {
        placeholder: 'mintbase.near',
        value: 'mintbase.near',
        status: EControlStatus.VALID,
      },
    },
  ])

  const handleAccountInputChange = (e: any, index: number) => {
    const { value } = e.target
    const list = [...inputList]
    list[index]['account']['value'] = value
    if (value.split('.').pop() !== 'near') {
      if (value !== '') {
        list[index]['account']['status'] = EControlStatus.INVALID
      } else {
        list[index]['account']['status'] = EControlStatus.NORMAL
      }
    } else {
      list[index]['account']['status'] = EControlStatus.VALID
    }
    setInputList(list)
  }

  const handleRemoveClick = (index: number) => {
    if (inputList.length === 1) return
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  const handleAddClick = () => {
    console.log('add another account action')
  }

  return (
    <MbInputAccount
      maxAmount={20}
      inputList={inputList}
      removeInputHandler={handleRemoveClick}
      accountInputChangeHandler={handleAccountInputChange}
      subtitle="Add accounts to easily switch between."
      smallSubtitle="Add up to 20 accounts"
      footerTitle="Add Another Account"
      footerAction={handleAddClick}
    />
  )
}

export const AccountSelector = Template.bind({})
AccountSelector.args = {}
