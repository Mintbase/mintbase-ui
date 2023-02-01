import React from 'react'
import './tab.css'

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  label: JSX.Element
  isActive?: boolean
  isSmall?: boolean
  extraFilter?: string
  isExtraFilterSelected?: boolean
  onExtraFilterChange?: (isSelected: boolean) => void
}

export const MbTab = (props: TabProps) => {
  const { label, isActive, isSmall } = props
  return (
    <>
      <div className="flex">
        <div
          className={`tab p-med-90 ${isActive ? 'active' : ''} ${
            isSmall ? 'small' : ''
          }`}
        >
          {label}
        </div>
      </div>
    </>
  )
}
