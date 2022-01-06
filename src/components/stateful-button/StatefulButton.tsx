import React from 'react'

export interface MbStatefulButtonProps {
  indicator: JSX.Element
  content: JSX.Element
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const MbStatefulButton = ({
  indicator,
  content,
  className = '',
  onClick,
}: MbStatefulButtonProps) => {
  return (
    <div
      className={`flex p-12 h-12 justify-center dark:text-white items-center rounded-md bg-gray-100 hover:bg-gray-150 dark:hover:bg-gray-900 dark:bg-gray-800 select-none cursor-pointer ${className}`}
      onClick={onClick}
    >
      {indicator}
      {content}
    </div>
  )
}
