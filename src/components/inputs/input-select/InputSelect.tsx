import { MbIcon } from '../..'
import { EIconName } from '../../..'
import './InputSelect.css'

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange: (value: string) => void
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
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <MbIcon
        name={EIconName.SELECT_ARROWS}
        color="blue-300"
        darkColor="blue-100"
      />
    </div>
  )
}
