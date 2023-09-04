import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { EIconName, ESize } from '../../../consts'
import { MbIcon } from '../../icon/Icon'
import { EControlStatus, MbInput } from '../input-field/inputField'

export const MbAmountAccountInput = ({
  id,
  validateAccount,
  validateAmount,
  handleChangeAmount,
  handleChangeAccount,
  handleRemoveItem,
  isPercentage,
  isCleared,
  prefillAmount,
}: {
  id: string
  validateAmount: (id: any, amount: number) => boolean
  validateAccount: (id: any, value: string) => Promise<boolean>
  handleChangeAmount: (id: string, amount: number) => void
  handleChangeAccount: (id: string, account: string) => Promise<void>
  handleRemoveItem: (id: string) => void
  isPercentage?: boolean
  isCleared?: boolean
  prefillAmount: number | null
}) => {
  const [isAccountValid, setIsAccountValid] = useState(false)
  const [isAmountValid, setIsAmountValid] = useState(false)

  const [account, setAccount] = useState<string | null>(null)
  const [amount, setAmount] = useState<string | null>(
    prefillAmount !== null ? prefillAmount.toString() : null
  ) // Set the initial value based on prefillAmount

  useEffect(() => {
    if (!isCleared) return
    setIsAmountValid(false)
    setIsAccountValid(false)
    setAccount(null)
    setAmount(prefillAmount !== null ? prefillAmount.toString() : null)
  }, [isCleared])

  const handleDebounceFor500 = debounce(async (e) => {
    const value = e.target.value ?? null
    const valid = await validateAccount(id, value)
    setIsAccountValid(valid)
    setAccount(value)
    handleChangeAccount(id, value)
  }, 500)

  const handleAmountDebounceFor500 = debounce(async (e) => {
    const value = e.target.value ?? null
    const valid = validateAmount(id, Number(value))
    setIsAmountValid(valid)
    setAmount(prefillAmount !== null ? prefillAmount.toString() : value)
    handleChangeAmount(id, Number(value))
  }, 500)

  return (
    <div className="flex items-center space-x-12 mb-12">
      <div className="w-24">
        <MbInput
          type="tel"
          id={`amount-${id}`}
          placeholder={'1'}
          inputSize={ESize.BIG}
          controlStatus={
            isCleared || !amount
              ? EControlStatus.NORMAL
              : isAmountValid
              ? EControlStatus.VALID
              : EControlStatus.INVALID
          }
          onChange={handleAmountDebounceFor500}
          hasPercentageLabel={isPercentage}
          defaultValue={amount === '1' ? 1 : undefined}
        />
      </div>
      <MbInput
        type="text"
        id={`account-${id}`}
        hasIcon={!(isCleared || !account)}
        placeholder={'account.near'}
        inputSize={ESize.BIG}
        controlStatus={
          isCleared || !account
            ? EControlStatus.NORMAL
            : isAccountValid
            ? EControlStatus.VALID
            : EControlStatus.INVALID
        }
        onChange={handleDebounceFor500}
      />
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
    </div>
  )
}
