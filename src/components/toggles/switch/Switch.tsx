import './switch.css'

const MbSwitch = () => {
  return (
    <div className="switch">
      <input
        type="checkbox"
        className="switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
      />
      <label className="switch-label" htmlFor="toggleSwitch">
        <span className="switch-btn" />
      </label>
    </div>
  )
}

export default MbSwitch
