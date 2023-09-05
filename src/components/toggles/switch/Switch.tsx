import { MbIcon } from '../../icon/Icon'
import { EIconName } from '../../../consts/icons'
import './switch.css'
import { forwardRef } from 'react'
import { ToggleProps } from '../../..'

export const MbSwitch = forwardRef<HTMLInputElement, ToggleProps>(
  ({ id, label, checked, disabled, ...restProps }, ref) => {
    return (
      <div className={`switch ${disabled ? 'disabled' : ''}`}>
        <input
          type="checkbox"
          className="switch-checkbox"
          id={id}
          checked={checked}
          ref={ref}
          disabled={disabled}
          {...restProps}
        />
        <label className="switch-label" htmlFor={id}>
          <span className="switch-btn">
            <MbIcon
              name={checked ? EIconName.CHECK : EIconName.CLOSE}
              size="16px"
              color="white"
              darkColor="black"
            />
          </span>
        </label>
      </div>
    )
  }
)
