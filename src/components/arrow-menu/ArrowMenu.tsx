import { EIconName } from '../../consts'
import { MbIcon } from '../icon/Icon'
import '../tabs/tab.css'

interface ArrowMenuProps {
  title: string
  isActive?: boolean
}

export const MbArrowMenu = (props: ArrowMenuProps) => {
  const { title, isActive } = props
  return (
    <div className="flex group">
      <div className={`tab p-med-90 ${isActive ? 'active' : ''} small`}>
        <div className="flex space-x-8 items-center">
          <span>{title}</span>
          <MbIcon
            name={EIconName.ARROW_DROP_DOWN}
            className="flex transform transition ease-in-out duration-300 group-hover:rotate-180 rotate-0"
            size="16px"
            color="blue-300"
            darkColor="blue-100"
          />
        </div>
      </div>
    </div>
  )
}
