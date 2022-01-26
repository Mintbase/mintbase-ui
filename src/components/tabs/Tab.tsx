import React from 'react'
import './tab.css'

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  extraFilter?: string
  onExtraFilterChange?: (isSelected: boolean) => void
}

export const MbTab = (props: TabProps) => {
  const { title, isActive } = props
  return (
    <>
      <div className="flex">
        <div className={`tab p-med-90 ${isActive ? 'active' : ''}`}>
          {title}
        </div>
      </div>
    </>
  )
}
