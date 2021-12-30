import { useEffect, useState } from 'react'
import './amountbutton.css'

interface AmountButtonProps {
  max: number
  disabled: boolean
  onValueChange: (amount: number) => void
}

const MbAmountButton = (props: AmountButtonProps) => {
  const [amount, setAmount] = useState(1)

  const { max, disabled, onValueChange } = props

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

  const handleContentChanges = (event: any) => {
    event.preventDefault()
    const value = event.target.value

    if (value === '' || value === '0') {
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
    <div className="flex items-end">
      <button
        className={`amount-button ${disabled ? 'disabled' : ''}`}
        onClick={handleMinus}
      >
        <span className="p-big-90">-</span>
      </button>
      <input
        className={`h2-90 dark:text-white mx-12 w-10 text-center outline-none ${
          disabled ? 'text-gray-500' : ''
        }`}
        value={amount}
        onChange={handleContentChanges}
      />
      <button
        className={`amount-button ${disabled ? 'disabled' : ''}`}
        onClick={handlePlus}
      >
        <span className="p-big-90">+</span>
      </button>
    </div>
  )
}

export default MbAmountButton
