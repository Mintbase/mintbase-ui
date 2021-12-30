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
      <p
        className={`h2-90 dark:text-white mx-12 w-10 text-center ${
          disabled ? 'text-gray-500' : ''
        }`}
      >
        {amount}
      </p>
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
