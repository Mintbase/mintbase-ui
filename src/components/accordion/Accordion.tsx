import React, { useState } from 'react'
import { MbIcon } from '..'
import { EIconName } from '../..'

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  isOpen?: boolean
  isFixedAccordion?: boolean
  hasInfoIcon?: boolean
}

export const MbAccordion = (props: AccordionProps) => {
  const { title, isOpen, isFixedAccordion, hasInfoIcon, children } = props

  const [isExpanded, setIsExpanded] = useState(isOpen)

  const toggle = () => {
    if (isFixedAccordion) return
    setIsExpanded(!isExpanded)
  }

  return (
    <main className="rounded bg-white dark:bg-gray-850 dark:text-white">
      <header
        className={`flex justify-between items-center p-24 cursor-pointer ${
          isExpanded ? 'border-b border-gray-150 dark:border-gray-700' : ''
        }`}
        onClick={toggle}
      >
        <div>{title}</div>
        <div className="space-x-24 flex">
          {hasInfoIcon && (
            <MbIcon
              name={EIconName.INFO}
              size="20px"
              color="blue-300"
              darkColor="blue-100"
            />
          )}
          {!isFixedAccordion && (
            <MbIcon
              name={
                !isExpanded
                  ? EIconName.ARROW_EXPAND_MORE
                  : EIconName.ARROW_EXPAND_LESS
              }
              size="20px"
              color="black"
              darkColor="white"
            />
          )}
        </div>
      </header>
      {isExpanded && <section>{children}</section>}
    </main>
  )
}
