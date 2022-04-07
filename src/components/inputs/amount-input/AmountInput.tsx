import { forwardRef, useEffect, useState } from 'react'
import { ESize, getFontType } from '../../..'
import { EControlStatus } from '../input-field/inputField'
import './AmountInput.css'

interface AmountButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  maxAmount: number
  btnSize?: ESize
  controlStatus?: EControlStatus
  onValueChange: (amount: string) => void
}

export const MbAmountInput = forwardRef<HTMLInputElement, AmountButtonProps>(
  (
    {
      id,
      required,
      maxAmount = 50,
      disabled,
      btnSize = ESize.MEDIUM,
      controlStatus = EControlStatus.NORMAL,
      placeholder,
      value,
      type,
      onValueChange,
      ...restProps
    },
    ref
  ) => {
    const [amount, setAmount] = useState('1')

    const handlePlus = () => {
      if (disabled) return
      const updated = Number(amount) + 1
      if (updated === maxAmount + 1) return
      setAmount((Number(amount) + 1).toString())
    }

    const handleMinus = () => {
      if (disabled) return
      if (amount === '0') return
      const updated = Number(amount) - 1
      if (updated <= 0) return
      setAmount((Number(amount) - 1).toString())
    }

    const handleContentChanges = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      event.preventDefault()
      const value = event.target.value
      const isNumber = RegExp(/^\d*?$/).test(value)

      if (value === '' || value === '0' || !isNumber) {
        setAmount('')
        return
      }

      if (Number(value) <= maxAmount) {
        setAmount(value)
      }
    }

    useEffect(() => {
      onValueChange(amount)
    }, [amount])

    return (
      <div className="flex">
        <div
          className={` ${getFontType(
            btnSize
          )} flex main-input bg-gray-100 dark:bg-gray-900 p-8 rounded w-full ${
            disabled ? 'bg-gray-200 dark:bg-gray-700' : controlStatus
          }`}
        >
          <input
            className={`${
              btnSize === ESize.SMALL ? 'my-2' : 'ml-4 mr-12'
            } w-full dark:text-white outline-none bg-transparent mt-2 ${
              disabled ? 'text-gray-500' : ''
            }`}
            ref={ref}
            placeholder={'1'}
            disabled={disabled}
            required={required}
            onChange={handleContentChanges}
            type="text"
            value={amount}
            {...restProps}
          />
          <div
            className={`flex ${btnSize === ESize.SMALL ? 'gap-8' : 'gap-12'}`}
          >
            <button
              className={`amount-button ${
                disabled ? 'disabled' : ''
              } ${btnSize}`}
              type="button"
              onClick={handleMinus}
            >
              <span className="mt-2">-</span>
            </button>
            <button
              className={`amount-button ${
                disabled ? 'disabled' : ''
              } ${btnSize}`}
              type="button"
              onClick={handlePlus}
            >
              <span className="mt-2">+</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
)
