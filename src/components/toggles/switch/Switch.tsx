import { MbIcon } from '../../icon/Icon'
import { EIconName } from '../../../consts/icons'
import './switch.css'
import { TToggle } from '../../../types/toggles.type'
import { forwardRef } from 'react'

interface SwitchProps
  extends TToggle,
    React.InputHTMLAttributes<HTMLInputElement> {}

export const MbSwitch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, label, checked, disabled, ...restProps }, ref) => {
    return (
      <div className={`switch ${disabled ? 'disabled' : ''}`}>
        <input
          type="checkbox"
          className="switch-checkbox"
          id={id}
          checked={checked}
          ref={ref}
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
