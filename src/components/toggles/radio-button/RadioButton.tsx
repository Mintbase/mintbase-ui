import './radiobutton.css'

interface RadioButtonProps {
  label: string
  value: string
  isChecked: boolean
  handleChange: (id: string) => void
}

const MbRadioButton = (props: RadioButtonProps) => {
  const { label, value, isChecked, handleChange } = props

  return (
    <div className="flex items-center radio-item">
      <input
        type="radio"
        className="cursor-pointer"
        id={value}
        checked={isChecked}
        onChange={(e) => handleChange(e.target.id)}
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
