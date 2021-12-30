import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { ESize, EType } from '../../consts/properties'
import MbInputAccount from '../../components/inputs/input-account/InputAccount'
import { EControlStatus } from '../../components/inputs/input-field/inputField'
import { MbButton } from '../../components/button/Button'

export default {
  title: 'Components/Inputs',
  component: MbInputAccount,
  argTypes: {},
} as ComponentMeta<typeof MbInputAccount>

const LeftFooterActions = () => {
  return (
    <div className="flex space-x-12">
      <MbButton
        size={ESize.SMALL}
        btnType={EType.SECONDARY}
        label="Cancel"
        onClick={() => console.log('cancel')}
      />
      <MbButton
        size={ESize.SMALL}
        label="Transfer Tokens"
        onClick={() => console.log('transfer')}
      />
    </div>
  )
}

const Template: ComponentStory<typeof MbInputAccount> = (args) => {
  const [inputList, setInputList] = useState([
    {
      amount: {
        placeholder: '5',
        value: '',
        status: EControlStatus.NORMAL,
      },
      account: {
        placeholder: 'Name of the account',
        value: '',
        status: EControlStatus.NORMAL,
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

  const handleAmountInputChange = (e: any, index: number) => {
    const { value } = e.target
    const list = [...inputList]
    list[index]['amount']['value'] = value
    if (value > 100 || value <= 0) {
      if (value !== '') {
        list[index]['amount']['status'] = EControlStatus.INVALID
      } else {
        list[index]['amount']['status'] = EControlStatus.NORMAL
      }
    } else {
      list[index]['amount']['status'] = EControlStatus.VALID
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
    if (inputList.length + 1 === 100) return
    setInputList([
      ...inputList,
      {
        amount: {
          placeholder: '5',
          value: '',
          status: EControlStatus.NORMAL,
        },
        account: {
          placeholder: 'Name of the account',
          value: '',
          status: EControlStatus.NORMAL,
        },
      },
    ])
  }

  return (
    <MbInputAccount
      maxAmount={100}
      inputList={inputList}
      removeInputHandler={handleRemoveClick}
      accountInputChangeHandler={handleAccountInputChange}
      amountInputChangeHandler={handleAmountInputChange}
      title="Transfer Tokens"
      subtitle="Airdrop to multiple accounts, up to 100 accounts."
      smallSubtitle="Amount of tokens and recipient account"
      footerTitle="Add Account"
      leftFooterContent={<LeftFooterActions />}
      footerAction={handleAddClick}
    />
  )
}

export const AccountAmount = Template.bind({})
AccountAmount.args = {}
