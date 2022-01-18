import { TToggle } from '../../../types/toggles.type'
import './radiobutton.css'

interface RadioButtonProps extends TToggle {
  handleChange: (id: string) => void
}

export const MbRadioButton = (props: RadioButtonProps) => {
  const { label, id, isChecked, disabled, handleChange } = props

  return (
    <div
      className={`flex items-center radio-item ${disabled ? 'disabled' : ''}`}
    >
      <input
        type="radio"
        className="cursor-pointer"
        id={id}
        checked={isChecked}
        onChange={(e) => {
          if (disabled) return
          handleChange(e.target.id)
        }}
      />
      <label htmlFor={id}>
        <span className="p-med-90 pl-12 dark:text-white cursor-pointer">
          {label}
        </span>
      </label>
    </div>
  )
}