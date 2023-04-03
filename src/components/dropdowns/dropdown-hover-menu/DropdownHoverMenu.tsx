import { EIconName } from '../../../consts'
import { MbArrowMenu } from '../../arrow-menu/ArrowMenu'
import { MbIcon } from '../../icon/Icon'
import { MbTab } from '../../tabs/Tab'

export interface Item {
  content: JSX.Element
  selected?: boolean
  icon?: JSX.Element
  onClick?: () => void
}

interface DropdownHoverMenuProps {
  items: Item[]
  isOpen: boolean
  className?: string
  title: string
}

export const MbDropdownHoverMenu = (props: DropdownHoverMenuProps) => {
  const { isOpen, items, title } = props

  return (
    <div className="relative">
      <div className="cursor-pointer group h-auto w-min">
        <MbArrowMenu title="Explore" />
        <div
          id="menu-items"
          className="hidden opacity-0 group-hover:opacity-100 group-hover:flex absolute flex-col uppercase
          transition-opacity ease-in-out duration-300 bg-white py-2 px-4"
        >
          <div className="bg-black p-24 h-64 w-auto">content</div>
        </div>
      </div>
    </div>
  )
}
