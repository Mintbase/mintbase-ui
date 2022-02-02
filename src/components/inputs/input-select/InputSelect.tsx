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
  return (
    <div
      className={`select-wrapper flex items-center justify-between rounded ${
        props.disabled ? 'disabled' : 'default'
      }`}
    >
      <select
        className="select-field appearance-none"
        disabled={props.disabled}
        onChange={(event) => props.onValueChange(event.target.value)}
      >
        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <MbIcon
        name={EIconName.SELECT_ARROWS}
        color="blue-300"
        darkColor="blue-100"
        className='cursor-pointer'
      />
    </div>
  )
}
