import { MbIcon } from '../../icon/Icon'
import { EIconName } from '../../../consts/icons'
import './checkbox.css'
import { forwardRef } from 'react'
import { ToggleProps } from '../../..'

export const MbCheckbox = forwardRef<HTMLInputElement, ToggleProps>(
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
            disabled={disabled}
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
