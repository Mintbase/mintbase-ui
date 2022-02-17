import { useRef } from 'react'
import { MbIcon } from '../..'
import { EIconName } from '../../..'
import './InputSelect.css'

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: TSelectOption[]
  onValueChange: (value: string) => void
}

type TSelectOption = {
  value: string
  label: string
}

export const MbInputSelect = (props: SelectProps) => {
  const { disabled, options, onValueChange } = props
  return (
    <div
      className={`select-wrapper flex items-center justify-between rounded ${
        disabled ? 'disabled' : 'default'
      }`}
    >
      <select
        className="select-field appearance-none"
        disabled={disabled}
        onChange={(event) => onValueChange(event.target.value)}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <div>
        <MbIcon
          name={EIconName.SELECT_ARROWS}
          color="blue-300"
          darkColor="blue-100"
          className="cursor-pointer"
        />
      </div>
    </div>
  )
}
