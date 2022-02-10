import { forwardRef } from 'react'
import { TToggle } from '../../../types/toggles.type'
import './radiobutton.css'

interface RadioProps
  extends TToggle,
    React.InputHTMLAttributes<HTMLInputElement> {}

export const MbRadioButton = forwardRef<HTMLInputElement, RadioProps>(
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
