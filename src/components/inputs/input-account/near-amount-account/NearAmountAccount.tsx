import { send } from 'process'
import { useState, useEffect } from 'react'
import { uuid } from 'uuidv4'
import { ESize, EIconName, EState, EType } from '../../../../consts'
import { TInputState } from '../../../../types'
import { MbAction } from '../../../action/Action'
import { MbButton } from '../../../buttons/button/Button'
import { MbInfoCard } from '../../../cards/info/InfoCard'
import { MbIcon } from '../../../icon/Icon'
import { MbAmountAccountInput } from '../../amount-account-input/AmountAccountInput'
import { MbInput, EControlStatus } from '../../input-field/inputField'
import { MbInputAccount } from '../InputAccount'

export const MbNearAmountAccount = ({
  subtitle,
  smallSubtitle,
  defaultState,
  accountExists,
  defaultAccountsCounter = 0,
  initialUsedAmount = 0,
  saveButton,
  isPercentage,
  sendFinalState,
  isValidInfo,
  totalAmount = 100,
  transferTemplate,
  isStoreSettings,
  removeFromSettings,
}: {
  subtitle: string
  smallSubtitle: string
  defaultState: Record<string, TInputState>
  accountExists: (account: string) => Promise<boolean>
  defaultAccountsCounter: number
  initialUsedAmount?: number
  saveButton?: {
    text: string
    save: () => void
  }
  isPercentage?: boolean
  sendFinalState?: (state: Record<string, TInputState>) => void
  isValidInfo?: (valid: boolean) => void
  totalAmount: number
  transferTemplate?: {
    available: number
  }
  isStoreSettings?: boolean
  removeFromSettings?: (id: string) => void
}) => {
  const [used, setUsed] = useState<number>(0)
  const [state, setState] = useState<Record<string, TInputState>>({})
  const [isValid, setValid] = useState(false)
  const [hasFilledFields, setHasFilledFields] = useState(false)

  const addFieldsToState = (defaultAmount = 0) => {
    let auxState: Record<string, TInputState> = {}
    const inputAmount = transferTemplate?.available
      ? transferTemplate.available > 50
        ? 50
        : transferTemplate.available
      : 25
    for (let i = 0; i < inputAmount - defaultAmount; i++) {
      const id = uuid()

      auxState = {
        ...auxState,
        [id]: {
          account: {
            value: '',
            valid: false,
          },
          amount: {
            value: 0,
            valid: false,
          },
          editable: true,
          cleared: false,
        },
      }
    }

    return auxState
  }

  const handleAddNewItem = () => {
    const id = uuid()

    setState({
      ...state,
      [id]: {
        account: {
          value: '',
          valid: false,
        },
        amount: {
          value: 0,
          valid: false,
        },
        editable: true,
        cleared: false,
      },
    })
  }

  const sumStateAmounts = (state: Record<string, TInputState>) => {
    return Object.values(state)
      .filter((elm) => elm.amount.valid)
      .reduce((prev, curr) => {
        if (curr.amount.valid) {
          return curr.amount.value + prev
        }
        return 0
      }, 0)
  }

  const handleRemoveItem = (id: string) => {
    const newState = { ...state }
    newState[id].amount.value = 0
    newState[id].account.value = ''
    newState[id].amount.valid = false
    newState[id].account.valid = false
    newState[id].cleared = true
    newState[id].editable = true
    setUsed(sumStateAmounts(newState))
    setState(newState)
    ;(document.getElementById(`amount-${id}`) as HTMLInputElement).value = ''
    ;(document.getElementById(`account-${id}`) as HTMLInputElement).value = ''

    if (isStoreSettings && removeFromSettings) {
      removeFromSettings(id)
    }
  }
  const handleChangeAmount = (id: string, amount: number) => {
    const newState = { ...state }
    newState[id].amount.value = amount
    newState[id].cleared = amount === 0
    setState(newState)
    if (newState[id].amount.valid || newState[id].cleared) {
      setUsed(sumStateAmounts(newState))
    }
  }

  const handleChangeAccount = async (id: string, account: string) => {
    const newState = { ...state }
    newState[id].account.value = account
    newState[id].cleared = false
    setState(newState)
  }

  const validateAmountById = (id: string, valid: boolean) => {
    if (valid) setUsed(used + state[id].amount.value)
    const newState = { ...state }
    newState[id].amount.valid = valid
    setState(newState)
  }

  const validateAccountById = (id: string, valid: boolean) => {
    const newState = { ...state }
    newState[id].account.valid = valid
    setState(newState)
  }

  const validateAmount = (id: string, amount: number) => {
    const newState = { ...state }
    delete newState[id]

    const valid = transferTemplate
      ? transferTemplate.available - used - amount >= 0 && amount > 0
      : totalAmount - used - amount >= 0 && amount > 0

    validateAmountById(id, valid)

    return valid
  }

  const validateAccount = async (id: string, account: string) => {
    const valid = await accountExists(account)

    validateAccountById(id, valid)

    return valid
  }

  const reset = () => {
    setState({
      ...defaultState,
      ...addFieldsToState(0),
    })
    setUsed(initialUsedAmount)
    Object.keys(state).forEach((id) => {
      const amountInput = document.getElementById(
        `amount-${id}`
      ) as HTMLInputElement
      const accountInput = document.getElementById(
        `account-${id}`
      ) as HTMLInputElement
      if (!amountInput || !accountInput) return
      amountInput.value = ''
      accountInput.value = ''
      state[id].cleared = true
    })
  }

  useEffect(() => {
    setHasFilledFields(
      Object.keys(state).filter(
        (key) => state[key].account.value || state[key].amount.value
      ).length > 0
    )
    const filterState = Object.keys(state).filter(
      (key) => state[key].account.value && state[key].amount.value
    )
    const isValidForm =
      filterState.filter(
        (key) => state[key].amount.valid && state[key].account.valid
      ).length === filterState.length

    setValid(isValidForm)

    if (isValidInfo) {
      isValidInfo(isValidForm)
    }

    if (isValidForm && sendFinalState) {
      sendFinalState(state)
    }
  }, [state])

  useEffect(() => {
    setUsed(initialUsedAmount)
  }, [initialUsedAmount])

  useEffect(() => {
    setState({ ...addFieldsToState() })
  }, [])

  useEffect(() => {
    setState({
      ...defaultState,
      ...addFieldsToState(defaultAccountsCounter),
    })
  }, [defaultState])

  return (
    <>
      <MbInputAccount
        subtitle={subtitle}
        smallSubtitle={smallSubtitle}
        inputs={
          <>
            <div>
              {Object.keys(state).map((id, index) => {
                const { amount, account, editable } = state[id]

                if (editable) {
                  return (
                    <MbAmountAccountInput
                      key={id}
                      id={id}
                      validateAccount={validateAccount}
                      validateAmount={validateAmount}
                      handleChangeAmount={handleChangeAmount}
                      handleChangeAccount={handleChangeAccount}
                      handleRemoveItem={handleRemoveItem}
                      handleAddNewItem={handleAddNewItem}
                      isPercentage={isPercentage}
                      isCleared={state[id].cleared}
                    />
                  )
                } else {
                  return (
                    <div
                      key={id}
                      className="flex items-center space-x-12 mb-12"
                    >
                      <div className="w-24">
                        <MbInput
                          type="number"
                          placeholder={'1'}
                          inputSize={ESize.BIG}
                          controlStatus={EControlStatus.NORMAL}
                          disabled
                          hasPercentageLabel={isPercentage}
                          value={amount.value}
                        />
                      </div>
                      <MbInput
                        type="text"
                        hasIcon={false}
                        placeholder={'account.near'}
                        inputSize={ESize.BIG}
                        disabled
                        controlStatus={EControlStatus.NORMAL}
                        value={account.value}
                      />
                      {isStoreSettings && (
                        <div
                          className={`cursor-pointer`}
                          onClick={() => {
                            handleRemoveItem(id)
                          }}
                        >
                          <MbIcon
                            name={EIconName.DELETE}
                            size="24px"
                            color="blue-300"
                            darkColor="blue-100"
                          />
                        </div>
                      )}
                    </div>
                  )
                }
              })}
            </div>
          </>
        }
        footer={
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full gap-24">
            <div className="grid grid-cols-2 gap-12">
              {transferTemplate ? (
                <>
                  <MbInfoCard
                    boxInfo={{
                      description: `${transferTemplate.available - used}`,
                      title: 'Available Tokens',
                    }}
                  />
                  <MbInfoCard
                    boxInfo={{
                      description: `${totalAmount}`,
                      title: 'Total tokens',
                    }}
                  />
                </>
              ) : (
                <>
                  <MbInfoCard
                    boxInfo={{
                      description: `${used}%`,
                      title: 'Used Percentage',
                    }}
                  />
                  <MbInfoCard
                    boxInfo={{
                      description: `${totalAmount}%`,
                      title: 'Available Percentage',
                    }}
                  />
                </>
              )}
            </div>
            <div className="flex items-center justify-center md:justify-end gap-24">
              <MbAction
                state={hasFilledFields ? EState.ACTIVE : EState.DISABLED}
                onClick={(e) => {
                  e.preventDefault()
                  if (!hasFilledFields) return
                  reset()
                }}
              >
                <span>Clear all</span>
              </MbAction>
              {saveButton && (
                <MbButton
                  btnType={EType.PRIMARY}
                  label={saveButton.text}
                  size={ESize.MEDIUM}
                  state={isValid ? EState.ACTIVE : EState.DISABLED}
                  onClick={saveButton.save}
                  disabled={!isValid}
                />
              )}
            </div>
          </div>
        }
      />
    </>
  )
}
