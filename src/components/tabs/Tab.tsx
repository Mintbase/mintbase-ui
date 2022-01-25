import React from 'react'
import './tab.css'

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  extraFilter?: string
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
