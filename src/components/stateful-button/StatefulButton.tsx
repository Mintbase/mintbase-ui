import React from 'react'

export interface MbStatefulButtonProps {
  indicator: JSX.Element
  content: JSX.Element
  className?: string
}

export const MbStatefulButton = ({
  indicator,
  content,
  className = '',
}: MbStatefulButtonProps) => {
  return (
    <div
      className={`flex p-12 h-12 justify-center dark:text-white items-center rounded-md bg-gray-100 dark:hover:bg-gray-850 dark:bg-gray-800 ${className}`}
    >
      {indicator}
      {content}
    </div>
  )
}
