import { MbIcon } from '../../icon/Icon'
import { EIconName } from '../../../consts/icons'
import './checkbox.css'
import { TToggle } from '../../../types/toggles.type'
import { forwardRef } from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const MbCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, checked, disabled, ...restProps }, ref) => {
    return (
      <>
        <label className="flex items-end">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            {...restProps}
            ref={ref}
          />
          <div
            className={`checkbox-item ${disabled ? 'disabled' : ''} ${
              checked ? 'active' : ''
            }`}
            aria-hidden="true"
          >
            {checked && (
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
)
