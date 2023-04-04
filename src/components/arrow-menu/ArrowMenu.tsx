import { EIconName } from '../../consts'
import { MbIcon } from '../icon/Icon'
import './arrowMenu.css'

interface ArrowMenuProps {
  title: string
  isActive?: boolean
}

export const MbArrowMenu = (props: ArrowMenuProps) => {
  const { title, isActive } = props
  return (
    <div className="flex group">
      <div className={`arrow-menu ${isActive ? 'active' : ''}`}>
        <div className="flex space-x-8 items-center">
          <span className="p-med-130 ">{title}</span>
          <MbIcon
            name={EIconName.ARROW_DROP_DOWN}
            className="flex transform transition ease-in-out duration-500 group-hover:rotate-180 rotate-0"
            size="16px"
            color="black dark:text-white group-hover:text-blue-300 dark:group-hover:text-blue-100 transition ease-in-out duration-500"
          />
        </div>
      </div>
    </div>
  )
}
