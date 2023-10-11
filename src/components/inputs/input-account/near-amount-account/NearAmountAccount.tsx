import { useEffect, useState } from 'react'
import { uuid } from 'uuidv4'
import { EIconName, ESize, EState, EType } from '../../../../consts'
import { TInputState } from '../../../../types'
import { MbAction } from '../../../action/Action'
import { MbButton } from '../../../buttons/button/Button'
import { MbInfoCard } from '../../../cards/info/InfoCard'
import { Item } from '../../../dropdowns/dropdown-menu/DropdownMenu'
import { MbIcon } from '../../../icon/Icon'
import { MbAmountAccountInput } from '../../amount-account-input/AmountAccountInput'
import { EControlStatus, MbInput } from '../../input-field/inputField'
import { MbInputAccount } from '../InputAccount'
import { MbText } from '../../../text/Text'

const REGEX_INTEGER_ONLY = /^[1-9]\d*$/

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
  dropdownItems,
  usedAmount,
  maxAmountPerAccount,
  allowEmptyState,
}: {
  subtitle: string
  smallSubtitle: string
  defaultState: Record<string, TInputState>
  accountExists: (account: string) => Promise<boolean>
  defaultAccountsCounter: number
  initialUsedAmount?: number
  saveButton?: {
    text: string
    save: () => boolean
  }
  isPercentage?: boolean
  sendFinalState?: (state: Record<string, TInputState>) => void
  isValidInfo?: (valid: boolean) => void
  totalAmount: number
  transferTemplate?: {
    available: number
  }
  isStoreSettings?: boolean
  dropdownItems?: Item[]
  usedAmount?: (amount: number) => void
  maxAmountPerAccount?: number
  allowEmptyState?: boolean
}) => {
  const [used, setUsed] = useState<number>(0)
  const [state, setState] = useState<Record<string, TInputState>>({})
  const [isValid, setValid] = useState(false)
  const [removedDefaultField, setRemovedDefaultField] = useState(false)
  const [hasFilledFields, setHasFilledFields] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [allCleared, setAllCleared] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isTouchedOnce, setIsTouchedOnce] = useState(false)
  const [isEdited, setIsEdited] = useState(false)

  const addFieldsToState = (defaultAmount = 0) => {
    let auxState: Record<string, TInputState> = {}
    const inputAmount = transferTemplate?.available
      ? transferTemplate.available > 50
        ? 50
        : transferTemplate.available
      : 1
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
            value: totalAmount === 1 ? 1 : 0, // Set amount to 1 when totalAmount is 1
            valid: totalAmount === 1,
          },
          editable: true,
          cleared: false,
        },
      }
    }

    return auxState
  }

  const maxValue = 25
  const itemIds = Object.keys(state).map((id) => id)

  useEffect(() => {
    if (itemIds.length >= maxValue) {
      setErrorMessage('You have reached the max limit!')
    }
    return () => {
      setErrorMessage('')
    }
  }, [itemIds.length >= maxValue])

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

  const handleRemoveInputField = (id: string) => {
    setState((prevState) => {
      const updatedState = { ...prevState }
      delete updatedState[id]
      return updatedState
    })
  }

  const handleRemoveItem = (id: string) => {
    const newState = { ...state }
    const keys = Object.keys(state)
    const firstKey = keys[0]

    if (totalAmount !== 1) {
      // Clear the amount value except when totalAmount is 1
      newState[id].amount.value = 0
      newState[id].amount.valid = false
    }

    // Always clear the account value
    newState[id].account.value = ''
    newState[id].account.valid = false

    // Mark the item as cleared and editable
    newState[id].cleared = true
    newState[id].editable = true

    //update used amount
    setUsed(sumStateAmounts(newState))

    setState(newState)
    setRemovedDefaultField(false)

    // Clear the input field values using DOM manipulation
    if (totalAmount !== 1) {
      ;(document.getElementById(`amount-${id}`) as HTMLInputElement).value = ''
    }
    ;(document.getElementById(`account-${id}`) as HTMLInputElement).value = ''

    if (isStoreSettings && Object.keys(defaultState).includes(id)) {
      setRemovedDefaultField(true)
    }

    if (firstKey !== id) handleRemoveInputField(id)
  }

  const handleChangeAmount = (id: string, amount: number) => {
    setAllCleared(false)
    const newState = { ...state }
    newState[id].amount.value = amount
    newState[id].cleared = amount === 0
    setState(newState)
    if (isStoreSettings && Object.keys(defaultState).includes(id)) {
      setRemovedDefaultField(false)
    }

    if (newState[id].amount.valid || newState[id].cleared) {
      setUsed(sumStateAmounts(newState))
    }
  }

  const handleChangeAccount = async (id: string, account: string) => {
    const newState = { ...state }
    newState[id].account.value = account
    newState[id].cleared = false
    setState(newState)
    setAllCleared(false)
    setIsTouchedOnce(true)
    setIsEdited(isEdited || isTouchedOnce)

    if (isStoreSettings && Object.keys(defaultState).includes(id)) {
      setRemovedDefaultField(false)
    }
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

    const regexTest = REGEX_INTEGER_ONLY.test(amount.toString())

    const auxUsed = sumStateAmounts(newState)

    const valid = transferTemplate
      ? transferTemplate.available - auxUsed - amount >= 0 && regexTest
      : totalAmount - auxUsed - amount >= 0 && regexTest

    const finalValidInfo = maxAmountPerAccount
      ? amount <= maxAmountPerAccount && valid
      : valid

    validateAmountById(id, finalValidInfo)

    return finalValidInfo
  }

  const validateAccount = async (id: string, account: string) => {
    const valid =
      (await accountExists(account)) &&
      !Object.values(state).filter((elm) => elm.account.value === account)
        .length

    validateAccountById(id, valid)

    return valid
  }

  const reset = () => {
    const newState = {
      ...defaultState,
      ...addFieldsToState(0),
    }
    setState(newState)

    setUsed(sumStateAmounts(newState))
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
    setAllCleared(true)
  }

  const defaultAmountStatus = (amount: number): EControlStatus => {
    if (maxAmountPerAccount && amount > maxAmountPerAccount)
      return EControlStatus.INVALID
    return EControlStatus.NORMAL
  }

  useEffect(() => {
    setHasFilledFields(
      Object.keys(state).filter(
        (key) =>
          state[key].editable &&
          (state[key].account.value || state[key].amount.value)
      ).length > 0
    )
    setIsSaved(false)

    const filterState = Object.keys(state).filter(
      (key) =>
        (state[key].account.value || state[key].amount.value) &&
        state[key].editable
    )

    const isValidForm =
      (filterState.length > 0 &&
        filterState.filter(
          (key) =>
            (totalAmount === 1 || state[key].amount.valid) &&
            state[key].account.valid &&
            state[key].editable
        ).length === filterState.length) ||
      (allowEmptyState &&
        !filterState.filter(
          (key) => !state[key].account.valid || !state[key].amount.valid
        ).length)

    const isFinalValid = isValidForm || removedDefaultField

    setValid(isFinalValid)

    if (isValidInfo) {
      isValidInfo(isFinalValid)
    }

    if (sendFinalState) {
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

  useEffect(() => {
    if (!usedAmount) return
    usedAmount(used)
  }, [used])

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
                      isPercentage={isPercentage}
                      isCleared={state[id].cleared}
                      prefillAmount={totalAmount === 1 ? 1 : null}
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
                          id={`amount-${id}`}
                          type="number"
                          placeholder="0"
                          inputSize={ESize.BIG}
                          controlStatus={defaultAmountStatus(amount.value)}
                          disabled
                          hasPercentageLabel={isPercentage}
                          value={totalAmount !== 1 ? amount.value : undefined}
                          defaultValue={totalAmount === 1 ? 1 : undefined}
                        />
                      </div>
                      <MbInput
                        id={`account-${id}`}
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
                            name={EIconName.CLOSE}
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
              {errorMessage !== '' && (
                <MbText className="mt-3 p-small-130 text-mb-red">
                  {errorMessage}
                </MbText>
              )}
              <MbAction
                state={
                  itemIds.length >= maxValue ? EState.DISABLED : EState.ACTIVE
                }
                onClick={(e) => {
                  e.preventDefault()
                  handleAddNewItem()
                }}
              >
                <span>Add Another Account</span>
              </MbAction>
            </div>
          </>
        }
        footer={
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full gap-24">
            <div className="grid grid-cols-2 gap-12 text-left">
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
                state={
                  hasFilledFields && !allCleared
                    ? EState.ACTIVE
                    : EState.DISABLED
                }
                onClick={(e) => {
                  e.preventDefault()
                  if (!hasFilledFields && allCleared) return
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
                  state={
                    isValid
                      ? isSaved
                        ? EState.DISABLED
                        : EState.ACTIVE
                      : EState.DISABLED
                  }
                  onClick={() => {
                    if (!isValid || isSaved) return
                    setRemovedDefaultField(false)
                    setIsSaved(saveButton.save)
                  }}
                  dropDownItems={dropdownItems}
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
