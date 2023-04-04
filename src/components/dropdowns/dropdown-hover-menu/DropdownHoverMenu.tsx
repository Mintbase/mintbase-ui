import { MbArrowMenu } from '../../arrow-menu/ArrowMenu'

interface DropdownHoverMenuProps {
  className?: string
  title: string
  children: JSX.Element
}

export const MbDropdownHoverMenu = (props: DropdownHoverMenuProps) => {
  const { title, className, children } = props

  return (
    <div className="relative">
      <div className="group h-auto w-min">
        <MbArrowMenu title={title} />
        <div
          id="menu-items"
          className={`invisible opacity-0 group-hover:opacity-100 group-hover:visible flex absolute flex-col
          transition-all ease-in-out duration-300 bg-white dark:bg-gray-850 p-24 ${className}`}
        >
          <div className="dark:text-white">{children}</div>
        </div>
      </div>
    </div>
  )
}
