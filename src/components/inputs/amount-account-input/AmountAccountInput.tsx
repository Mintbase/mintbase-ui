import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { ESize, EIconName } from '../../../consts'
import { MbIcon } from '../../icon/Icon'
import { MbInput, EControlStatus } from '../input-field/inputField'

export const MbAmountAccountInput = ({
  id,
  validateAccount,
  validateAmount,
  handleChangeAmount,
  handleChangeAccount,
  handleAddNewItem,
  handleRemoveItem,
  isPercentage,
  isCleared,
}: {
  id: string
  validateAmount: (id: any, amount: number) => boolean
  validateAccount: (id: any, value: string) => Promise<boolean>
  handleChangeAmount: (id: string, amount: number) => void
  handleChangeAccount: (id: string, account: string) => Promise<void>
  handleAddNewItem: () => void
  handleRemoveItem: (id: string) => void
  isPercentage?: boolean
  isCleared?: boolean
}) => {
  const [isAccountValid, setIsAccountValid] = useState(false)
  const [isAmountValid, setIsAmountValid] = useState(false)

  const [account, setAccount] = useState<string | null>(null)
  const [amount, setAmount] = useState<string | null>(null)

  useEffect(() => {
    if (!isCleared) return
    setIsAmountValid(false)
    setIsAccountValid(false)
    setAccount(null)
    setAmount(null)
  }, [isCleared])

  const handleDebounceFor500 = debounce(async (e) => {
    const value = e.target.value ?? null
    const valid = await validateAccount(id, value)
    setIsAccountValid(valid)
    setAccount(value)
    handleChangeAccount(id, value)
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
          onChange={handleDebounceFor500}
          hasPercentageLabel={isPercentage}
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
