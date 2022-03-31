import React from 'react'
import './tab.css'

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  label: JSX.Element
  isActive?: boolean
  extraFilter?: string
  onExtraFilterChange?: (isSelected: boolean) => void
}

export const MbTab = (props: TabProps) => {
  const { label, isActive } = props
  return (
    <>
      <div className="flex">
        <div className={`tab p-med-90 ${isActive ? 'active' : ''}`}>
          {label}
        </div>
      </div>
    </>
  )
}
