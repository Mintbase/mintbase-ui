import React from 'react'
import { MbText } from '../text/Text'
import './dropdownmenu.css'

interface Item {
  text: string
  icon?: JSX.Element
  onClick: () => void
}

export const MbDropdownMenu = ({
  items,
  isOpen,
  className = '',
}: {
  items: Item[]
  isOpen: boolean
  className?: string
}) => {
  return !isOpen ? null : (
    <div className={`dropdown-menu ${className}`}>
      {items.map(({ text, icon, onClick }, index) => {
        return (
          <div
            key={`${text}-${index}`}
            className={'dropdown-item'}
            onClick={onClick}
          >
            <MbText
              className={'p-med-90 text-blue-300 dark:text-blue-100 max-w-80%'}
            >
              {text}
            </MbText>
            {icon && <div className={'dropdown-icon'}>{icon}</div>}
          </div>
        )
      })}
    </div>
  )
}
