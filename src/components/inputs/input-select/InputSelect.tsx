import { MbIcon } from '../..'
import { EIconName } from '../../..'
import './InputSelect.css'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: TSelectOption[]
  onValueChange: (value: string) => void
  value?: string
}

type TSelectOption = {
  value: string
  label: string
}

export const MbInputSelect = (props: SelectProps) => {
  const { options, value, onValueChange, ...restProps } = props
  return (
    <div
      className={`select-wrapper flex items-center justify-between rounded relative ${
        disabled ? 'disabled' : 'default'
      }`}
    >
      <select
        id="select"
        value={value}
        className="select-field appearance-none relative z-10"
        disabled={disabled}
        onChange={(event) => onValueChange(event.target.value)}
        {...restProps}
      >
        {options.map((option) => (
          <option value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <MbIcon
        name={EIconName.SELECT_ARROWS}
        color="blue-300"
        darkColor="blue-100"
        className="cursor-pointer absolute right-2"
      />
    </div>
  )
}
