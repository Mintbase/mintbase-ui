import React from 'react'

export interface MbStatefulButtonProps {
  indicator: JSX.Element
  content: JSX.Element
  className?: string
  hasEmptyStatus?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const MbStatefulButton = ({
  indicator,
  content,
  className = 'p-12',
  hasEmptyStatus = false,
  onClick,
}: MbStatefulButtonProps) => {
  return (
    <div
      className={`flex justify-center items-center rounded-md select-none ${
        hasEmptyStatus
          ? 'dark:bg-white dark:text-black bg-black text-white hover:bg-blue-300 dark:hover:bg-blue-100'
          : 'bg-gray-100 hover:bg-blue-300-15 dark:hover:bg-blue-100-15 dark:bg-gray-800 text-black dark:text-white'
      }  cursor-pointer transition-all duration-500 ${className}`}
      onClick={onClick}
    >
      {indicator}
      {content}
    </div>
  )
}
