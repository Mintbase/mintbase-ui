import React from 'react'
import { MbText } from '../../text/Text'
import './dropdownmenu.css'

export interface Item {
  text: string
  selected?: boolean
  icon?: JSX.Element
  onClick: () => void
}

interface DropdownMenuProps {
  items: Item[]
  isOpen: boolean
  className?: string
}

export const MbDropdownMenu = (props: DropdownMenuProps) => {
  const { isOpen, items, className } = props

  return !isOpen ? null : (
    <ul className={`dropdown-menu ${className}`}>
      {items.map(({ text, selected, icon, onClick }, index) => {
        return (
          <li
            key={`${text}-${index}`}
            className={`dropdown-item ${selected ? 'selected' : ''}`}
            onClick={onClick}
          >
            <MbText
              className={'p-med-90 text-blue-300 dark:text-blue-100 max-w-80%'}
            >
              {text}
            </MbText>
            {icon && <div className={'dropdown-icon'}>{icon}</div>}
          </li>
        )
      })}
    </ul>
  )
}
