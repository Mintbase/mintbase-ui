import React from 'react'
import { TabFilters } from './Tabs'
import './tabs.css'

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  filters?: TabFilters[]
}

export const MbTab = (props: TabProps) => {
  return (
    <>
      <div className="flex">
        <div className={`tab p-med-90 ${props.isActive ? 'active' : ''}`}>
          {props.title}
        </div>
      </div>
    </>
  )
}
