import { MbIcon } from '../../icon/Icon'
import { EIconName } from '../../../consts/icons'
import './chip.css'

interface ChipProps {
  label: string
  isChecked: boolean
  handleClick: () => void
}

const MbChip = (props: ChipProps) => {
  const { label, isChecked, handleClick } = props
  return (
    <div
      className={`chip ${isChecked ? 'active' : ''}`}
      onClick={() => handleClick()}
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

export default MbChip
