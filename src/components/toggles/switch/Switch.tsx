import { EState } from '../../..'
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
        <span className="switch-btn" />
      </label>
    </div>
  )
}

export default MbSwitch
