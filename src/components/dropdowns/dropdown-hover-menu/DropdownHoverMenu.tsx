import { MbArrowMenu } from '../../arrow-menu/ArrowMenu'
import './dropdownHoverMenu.css'

interface DropdownHoverMenuProps {
  className?: string
  title: string
  children: JSX.Element
}

export const MbDropdownHoverMenu = (props: DropdownHoverMenuProps) => {
  const { title, className, children } = props

  return (
    <>
      <div className="group h-auto w-min">
        <MbArrowMenu title={title} />
        <div
          className="invisible opacity-0 group-hover:opacity-100 group-hover:visible fixed 
          transition-all ease-in-out duration-500 bg-black bg-opacity-30 h-screen w-full"
        >
          <div
            id="menu-items"
            className={`bg-white dark:bg-gray-850 p-24 rounded-b dark:text-white flex flex-col absolute ${className}`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
