import { forwardRef } from 'react'
import { ToggleProps } from '../../..'
import './radiobutton.css'

export const MbRadioButton = forwardRef<HTMLInputElement, ToggleProps>(
  ({ id, value, label, checked, disabled, ...restProps }, ref) => {
    return (
      <div
        className={`flex items-center radio-item ${disabled ? 'disabled' : ''}`}
      >
        <input
          type="radio"
          className="cursor-pointer"
          id={id}
          value={value}
          checked={checked}
          ref={ref}
          {...restProps}
        />
        <label htmlFor={id}>
          <span className="p-med-90 pl-12 dark:text-white cursor-pointer">
            {label}
          </span>
        </label>
      </div>
    )
  }
)
