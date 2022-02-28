import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { ESize, EType, EState } from '../../../consts/properties'
import { MbInputAccount } from '../../../components/inputs/input-account/InputAccount'
import { EControlStatus } from '../../../components/inputs/input-field/inputField'
import { MbButton } from '../../../components/buttons/button/Button'
import { EIconName, MbAction, MbIcon, MbInput } from '../../..'

export default {
  title: 'Components/Inputs',
  component: MbInputAccount,
  argTypes: {},
} as ComponentMeta<typeof MbInputAccount>

const LeftFooterActions = ({
  isReadyForTransfer,
}: {
  isReadyForTransfer: boolean
}) => {
  return (
    <div className="flex space-x-12 w-full justify-end">
      <MbButton
        size={ESize.MEDIUM}
        btnType={EType.SECONDARY}
        label="Cancel"
        onClick={() => console.log('cancel')}
      />
      <MbButton
        size={ESize.MEDIUM}
        label="Transfer Tokens"
        state={isReadyForTransfer ? EState.ACTIVE : EState.DISABLED}
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
      subtitle="Airdrop to multiple accounts, up to 100 accounts."
      smallSubtitle="Amount of tokens and recipient account"
      inputs={
        <div>
          {inputList.length > 0 &&
            inputList.map((input, index) => {
              return (
                <div key={index} className="flex items-center space-x-12 mb-12">
                  <div className="w-24">
                    <MbInput
                      type="number"
                      id={index.toString()}
                      placeholder={input.amount.placeholder}
                      value={input.amount.value}
                      inputSize={ESize.BIG}
                      controlStatus={input.amount.status}
                      onChange={(e) => handleAmountInputChange(e, index)}
                      hasPercentageLabel
                      {...input.amount}
                    />
                  </div>
                  <MbInput
                    type="text"
                    id={index.toString()}
                    hasIcon={input.account.status !== EControlStatus.NORMAL}
                    placeholder={input.account.placeholder}
                    value={input.account.value}
                    inputSize={ESize.BIG}
                    controlStatus={input.account.status}
                    onChange={(e: any) => handleAccountInputChange(e, index)}
                    {...input.account}
                  />
                  <div
                    className={`${
                      inputList.length > 1
                        ? 'cursor-pointer'
                        : 'cursor-not-allowed'
                    }`}
                    onClick={() => handleRemoveClick(index)}
                  >
                    <MbIcon
                      name={EIconName.DELETE}
                      size="24px"
                      color="blue-300"
                      darkColor="blue-100"
                    />
                  </div>
                </div>
              )
            })}
        </div>
      }
      footer={
        <div className="flex justify-between items-center w-full">
          <div className="w-full flex justify-end">
            <MbAction
              state={
                inputList.length + 1 === 100 ? EState.DISABLED : EState.ACTIVE
              }
              size={ESize.BIG}
              onClick={handleAddClick}
            >
              <span>Add Account</span>
            </MbAction>
          </div>

          <LeftFooterActions
            isReadyForTransfer={
              inputList.filter(
                (elm) =>
                  elm.account.status === EControlStatus.VALID &&
                  elm.amount.status === EControlStatus.VALID
              ).length === inputList.length
            }
          />
        </div>
      }
    />
  )
}

export const AccountAmount = Template.bind({})
AccountAmount.args = {}
