import React from 'react'
import { MbText } from '../../text/Text'
import './dropdownmenu.css'

export interface Item {
  content: JSX.Element
  selected?: boolean
  icon?: JSX.Element
  onClick?: () => void
}

interface DropdownMenuProps {
  items: Item[]
  isOpen: boolean
  className?: string
}

export const MbDropdownMenu = (props: DropdownMenuProps) => {
  const { isOpen, items, className } = props

  return !isOpen ? null : (
    <ul
      className={`${className} dropdown-menu ${
        items.find((item) => item.icon) ? 'min-w-48' : ''
      }`}
    >
      {items.map(({ content, selected, icon, onClick }, index) => {
        return (
          <li
            key={`${index}`}
            className={`dropdown-item ${selected ? 'selected' : ''}`}
            onClick={onClick}
          >
            <MbText
              className={`p-med-90 text-blue-300 dark:text-blue-100 ${
                icon ? 'max-w-80%' : 'whitespace-nowrap'
              }`}
            >
              {content}
            </MbText>
            {icon && <div className={'dropdown-icon'}>{icon}</div>}
          </li>
        )
      })}
    </ul>
  )
}
