import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { EIconName, ESize, EState, MbAction, MbIcon, MbInput } from '../../..'
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
    if (inputList.length + 1 === 20) return
    setInputList([
      ...inputList,
      {
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
      subtitle="Add accounts to easily switch between."
      smallSubtitle="Add up to 20 accounts"
      inputs={
        <div>
          {inputList.length > 0 &&
            inputList.map((input, index) => {
              return (
                <div key={index} className="flex items-center space-x-12 mb-12">
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
        <div className="text-center">
          <MbAction
            state={
              inputList.length + 1 === 20 ? EState.DISABLED : EState.ACTIVE
            }
            size={ESize.BIG}
            onClick={handleAddClick}
          >
            <span>Add Another Account</span>
          </MbAction>
        </div>
      }
    />
  )
}

export const AccountSelector = Template.bind({})
AccountSelector.args = {}
