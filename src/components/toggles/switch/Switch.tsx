import { MbIcon } from '../..'
import { EIconName, EState } from '../../..'
import './switch.css'

interface SwitchProps {
  id: string
  isChecked: boolean
  disabled: boolean
  handleChange: (checked: boolean) => void
}

const MbSwitch = (props: SwitchProps) => {
  const { id, isChecked, disabled, handleChange } = props
  return (
    <div className={`switch ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        className="switch-checkbox"
        id={id}
        checked={isChecked}
        onChange={(e) => {
          if (disabled) return
          handleChange(e.target.checked)
        }}
      />
      <label className="switch-label" htmlFor={id}>
        <span className="switch-btn">
          <MbIcon
            name={isChecked ? EIconName.CHECK : EIconName.CLOSE}
            size="16px"
            color="white"
            darkColor="black"
          />
        </span>
      </label>
    </div>
  )
}

export default MbSwitch
