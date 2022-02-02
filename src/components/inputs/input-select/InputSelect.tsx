import './InputSelect.css'

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange: (value: string) => void
}

export const MbInputSelect = (props: SelectProps) => {
  return (
    <div
      className={`input-wrapper default flex items-center justify-between rounded ${
        props.disabled ? 'disabled' : 'default '
      }`}
    >
      <select
        className="input-field"
        disabled={props.disabled}
        onChange={(event) => props.onValueChange(event.target.value)}
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  )
}
