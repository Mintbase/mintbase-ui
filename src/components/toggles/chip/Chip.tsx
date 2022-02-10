import { MbIcon } from '../../icon/Icon'
import { EIconName } from '../../../consts/icons'
import './chip.css'
import { ToggleProps } from '../../..'

interface ChipProps extends ToggleProps {
  isChecked: boolean
  disabled: boolean
  handleClick: () => void
}

export const MbChip = (props: ChipProps) => {
  const { label, isChecked, disabled, handleClick } = props
  return (
    <div
      className={`chip ${isChecked ? 'active' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onClick={() => {
        if (disabled) return
        handleClick()
      }}
    >
      {isChecked && (
        <div className="icon">
          <MbIcon
            name={EIconName.CHECK}
            size="20px"
            color="white"
            darkColor="black"
          />
        </div>
      )}
      <div
        className={`p-big-90 pt-2 ${
          isChecked
            ? 'text-white dark:text-black'
            : 'text-blue-300 dark:text-blue-100'
        }`}
      >
        {label}
      </div>
    </div>
  )
}