interface CheckboxProps {
  label: string
  value: string
  isChecked: boolean
  disabled: boolean
  handleChange: (id: string) => void
}

const MbCheckbox = (props: CheckboxProps) => {
  const { label, value, isChecked, disabled, handleChange } = props
  return (
    <>
      <div className={`flex items-center radio-item `}>
        <input
          type="checkbox"
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
    </>
  )
}
export default MbCheckbox
