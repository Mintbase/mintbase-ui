import './switch.css'

interface SwitchProps {
  id: string
  isChecked: boolean
  handleChange: (checked: boolean) => void
}

const MbSwitch = (props: SwitchProps) => {
  const { id, isChecked, handleChange } = props
  return (
    <div className="switch">
      <input
        type="checkbox"
        className="switch-checkbox"
        id={id}
        checked={isChecked}
        onChange={(e) => handleChange(e.target.checked)}
      />
      <label className="switch-label" htmlFor={id}>
        <span className="switch-btn" />
      </label>
    </div>
  )
}

export default MbSwitch
