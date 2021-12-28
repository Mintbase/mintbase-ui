import React from 'react'
import { MbText } from '../text/Text'

interface Item {
  text: string
  icon?: JSX.Element
  onClick: () => void
}

// TODO: fix className type
export const MbDropdownMenu = ({ items, isOpen, className }: { items: Item[], isOpen: boolean, className: string }) => {

  return ! isOpen ? null : (
    <div  className={`bg-gray-50 dark:bg-gray-700 text-mb-blackblue dark:text-white shadow-md rounded-md w-64 mt-4 ${className}`}>
      {items.map(({ text, icon, onClick}, index) => {
        // TODO: fix over rounded corners for the first and last element
        return (
          <div key={`${text}-${index}`} className={'flex hover:bg-gray-500 p-8'} onClick={onClick}>
            <MbText className={'w-full justify-center flex'}>{text}</MbText>
            <div className={'flex items-center ml-4 w-6'}>{icon}</div>
          </div>
        )

      })}
    </div>
  )
}