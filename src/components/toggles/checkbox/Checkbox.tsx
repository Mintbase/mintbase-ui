import { MbIcon } from '../../icon/Icon'
import { EIconName } from '../../../consts/icons'
import './checkbox.css'
import { TToggle } from '../../../types/toggles.type'
interface CheckboxProps extends TToggle {
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
          checked={isChecked}
          onChange={(e) => {
            if (disabled) return
            handleChange(e.target.checked)
          }}
        />
        <div
          className={`checkbox-item ${disabled ? 'disabled' : ''} ${
            isChecked ? 'active' : ''
          }`}
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