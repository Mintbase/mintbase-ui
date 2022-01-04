import './radiobutton.css'

interface RadioButtonProps {
  label: string
  value: string
  isChecked: boolean
  disabled: boolean
  handleChange: (id: string) => void
}

const MbRadioButton = (props: RadioButtonProps) => {
  const { label, value, isChecked, disabled, handleChange } = props

  return (
    <div
      className={`flex items-center radio-item ${disabled ? 'disabled' : ''}`}
    >
      <input
        type="radio"
        className="cursor-pointer"
        id={value}
        checked={isChecked}
        onChange={(e) => {
          if (disabled) return
          handleChange(e.target.id)
        }}
      />
      <label htmlFor={value}>
        <span className="p-med-90 pl-12 dark:text-white cursor-pointer">
          {label}
        </span>
      </label>
    </div>
  )
}

export default MbRadioButton
