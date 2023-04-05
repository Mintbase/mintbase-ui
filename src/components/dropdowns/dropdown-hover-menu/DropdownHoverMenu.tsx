import { MbArrowMenu } from '../../arrow-menu/ArrowMenu'

interface DropdownHoverMenuProps {
  className?: string
  title: string
  children: JSX.Element
}

export const MbDropdownHoverMenu = (props: DropdownHoverMenuProps) => {
  const { title, className, children } = props

  return (
    <div id="dropdown-hover-menu" className="group h-auto w-min">
      <MbArrowMenu title={title} />
      <div className="hidden group-hover:block fixed bg-black bg-opacity-30 overflow-y-auto h-screen right-0 left-0 z-30"></div>
      <div
        id="menu-items"
        className={`invisible opacity-0 group-hover:opacity-100 group-hover:visible flex absolute flex-col
          transition-all ease-in-out duration-500 bg-white dark:bg-gray-850 p-24 rounded-b z-40 ${className}`}
      >
        <div className="dark:text-white">{children}</div>
      </div>
    </div>
  )
}
