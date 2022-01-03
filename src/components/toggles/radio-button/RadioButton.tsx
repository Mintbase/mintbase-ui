import './radiobutton.css'

interface RadioButtonProps {
  label: string
  value: string
  isChecked: boolean
  handleChange: (id: string) => void
}

const MbRadioButton = (props: RadioButtonProps) => {
  const { label, value, isChecked, handleChange } = props

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget
    handleChange(id)
  }
  return (
    <div className="flex items-center radio-item">
      <input
        type="radio"
        className="cursor-pointer"
        id={value}
        checked={isChecked}
        onChange={handleRadioChange}
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
