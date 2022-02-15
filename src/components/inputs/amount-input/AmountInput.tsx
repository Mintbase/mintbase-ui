import { useEffect, useState } from 'react'
import { ESize, getFontType } from '../../..'
import './AmountInput.css'

interface AmountButtonProps {
  max: number
  disabled?: boolean
  size?: ESize
  onValueChange: (amount: number) => void
}

export const MbAmountInput = (props: AmountButtonProps) => {
  const [amount, setAmount] = useState(1)

  const { max, disabled, size = ESize.MEDIUM, onValueChange } = props

  const handlePlus = () => {
    if (disabled) return
    const updated = amount + 1
    if (updated === max + 1) return
    setAmount(amount + 1)
  }

  const handleMinus = () => {
    if (disabled) return
    if (amount === 0) return
    const updated = amount - 1
    if (updated <= 0) return
    setAmount(amount - 1)
  }

  const handleContentChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value = event.target.value
    const isNumber = RegExp(/^\d*?$/).test(value)

    if (value === '' || value === '0' || !isNumber) {
      setAmount(0)
      return
    }

    const calValue = Math.min(Math.max(parseInt(value), 1), max)
    setAmount(calValue)
  }

  useEffect(() => {
    onValueChange(amount)
  }, [amount])

  return (
    <div className="flex">
      <div
        className={` ${getFontType(
          size
        )} flex bg-gray-100 dark:bg-gray-900 p-8 rounded w-full ${
          disabled ? 'bg-gray-200 dark:bg-gray-700' : ''
        }`}
      >
        <input
          className={`${
            size === ESize.SMALL ? 'my-2' : 'ml-4 mr-12'
          } w-full dark:text-white outline-none bg-transparent mt-2 ${
            disabled ? 'text-gray-500' : ''
          }`}
          value={amount}
          onChange={handleContentChanges}
        />
        <div className={`flex ${size === ESize.SMALL ? 'gap-8' : 'gap-12'}`}>
          <button
            className={`amount-button ${disabled ? 'disabled' : ''} ${size}`}
            onClick={handleMinus}
          >
            <span className="mt-2">-</span>
          </button>
          <button
            className={`amount-button ${disabled ? 'disabled' : ''} ${size}`}
            onClick={handlePlus}
          >
            <span className="mt-2">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}
