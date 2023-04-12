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

  const hideClasses = () => {
    const bg = document.getElementById('dropdown-bg')
    const items = wrapperRef?.current?.children[1]

    bg?.classList.remove('block')
    bg?.classList.add('hidden')
    items?.classList.remove('visible-menu')
    items?.classList.add('hidden-menu')
  }

  const showClasses = () => {
    const bg = document.getElementById('dropdown-bg')
    const items = wrapperRef?.current?.children[1]

    bg?.classList.remove('hidden')
    bg?.classList.add('block')
    items?.classList.remove('hidden-menu')
    items?.classList.add('visible-menu')
  }

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      const currentRef = wrapperRef.current

      const showHoverMenu = () => {
        showClasses()
      }

      const hideHoverMenu = () => {
        hideClasses()
      }

      currentRef.addEventListener('mouseenter', showHoverMenu)
      currentRef.addEventListener('mouseleave', hideHoverMenu)
      return () => {
        currentRef.removeEventListener('mouseenter', showHoverMenu)
        currentRef.removeEventListener('mouseleave', hideHoverMenu)
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
        className="h-auto w-min"
        ref={wrapperRef}
        onClick={hideClasses}
      >
        {dropdownButton}

        <div
          id="menu-items"
          className={`hidden-menu flex absolute flex-col bg-white dark:bg-gray-850 p-24 rounded-b z-40 ${className}`}
        >
          <div className="dark:text-white" onClick={hideClasses}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
