import { MbIcon } from '../..'
import { EIconName } from '../../..'
import './checkbox.css'
interface CheckboxProps {
  label: string
  id: string
  isChecked: boolean
  disabled: boolean
  handleChange: (checked: boolean) => void
}

const MbCheckbox = (props: CheckboxProps) => {
  const { label, id, isChecked, disabled, handleChange } = props
  return (
    <>
      <label className="flex items-end">
        <input
          type="checkbox"
          id={id}
          onChange={() => {
            handleChange(!isChecked)
          }}
        />
        <div
          className={`checkbox-item ${isChecked ? 'active' : ''}`}
          aria-hidden="true"
        >
          {isChecked && (
            <MbIcon
              name={EIconName.CHECK}
              size="14px"
              color="white"
              darkColor="black"
            />
          )}
        </div>
        <span className="p-med-90 pl-12 dark:text-white cursor-pointer">
          {label}
        </span>
      </label>
    </>
  )
}
export default MbCheckbox
