import { useEffect, useRef } from 'react'
import './dropdownHoverMenu.css'

interface DropdownHoverMenuProps {
  className?: string
  dropdownButton: JSX.Element
  children: JSX.Element
}

export const MbDropdownHoverMenu = (props: DropdownHoverMenuProps) => {
  const { className, children, dropdownButton } = props

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      const currentRef = wrapperRef.current
      const bg = document.getElementById('dropdown-bg')

      const showBg = () => {
        bg?.classList.remove('hidden')
        bg?.classList.add('block')
      }

      const hideBg = () => {
        bg?.classList.remove('block')
        bg?.classList.add('hidden')
      }

      currentRef.addEventListener('mouseenter', showBg)
      currentRef.addEventListener('mouseleave', hideBg)
      return () => {
        currentRef.removeEventListener('mouseenter', showBg)
        currentRef.removeEventListener('mouseleave', hideBg)
      }
    }
  }, [wrapperRef])

  return (
    <>
      <div
        id="dropdown-bg"
        className="hidden fixed bg-black bg-opacity-30 overflow-y-auto h-screen right-0 left-0 z-30"
      ></div>

      <div
        id="dropdown-hover-menu"
        className="group h-auto w-min"
        ref={wrapperRef}
      >
        {dropdownButton}

        <div
          id="menu-items"
          className={`invisible opacity-0 group-hover:opacity-100 group-hover:visible flex absolute flex-col
          transition-all ease-in-out duration-500 bg-white dark:bg-gray-850 p-24 rounded-b z-40 ${className}`}
        >
          <div className="dark:text-white">{children}</div>
        </div>
      </div>
    </>
  )
}
