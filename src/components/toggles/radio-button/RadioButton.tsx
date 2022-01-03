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
    <div className="flex items-center">
      <input
        type="radio"
        className="cursor-pointer accent-blue-300 focus:accent-blue-100"
        id={value}
        checked={isChecked}
        onChange={handleRadioChange}
      />
      <label htmlFor={value}>
        <span className="p-med-90 pl-12 dark:text-white">{label}</span>
      </label>
    </div>
  )
}

export default MbRadioButton
