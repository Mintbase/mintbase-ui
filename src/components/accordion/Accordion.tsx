import React, { useState } from 'react'
import { MbIcon } from '..'
import { EIconName } from '../..'
import { MbTooltip } from '../tooltip/Tooltip'

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  isOpen?: boolean
  isFixedAccordion?: boolean
  isVerifiedToken?: boolean
  extraIcon?: JSX.Element
}

export const MbAccordion = (props: AccordionProps) => {
  const {
    title,
    isOpen,
    isFixedAccordion,
    extraIcon,
    isVerifiedToken,
    children,
  } = props

  const [isExpanded, setIsExpanded] = useState(isOpen)

  const toggle = () => {
    if (isFixedAccordion) return
    setIsExpanded(!isExpanded)
  }

  return (
    <main className="rounded bg-white dark:bg-gray-850 dark:text-white">
      <header
        className={`flex justify-between items-center p-24 ${
          isFixedAccordion ? '' : 'cursor-pointer'
        } ${isExpanded ? 'border-b border-gray-150 dark:border-gray-700' : ''}`}
        onClick={toggle}
      >
        <div className="flex gap-12 items-center p-big-130">
          {title}
          {isVerifiedToken && (
            <MbTooltip
              text="Token from Verified Store"
              place="right"
              component={
                <MbIcon
                  name={EIconName.VERIFIED}
                  size="20px"
                  color="blue-300"
                  darkColor="blue-100"
                ></MbIcon>
              }
            ></MbTooltip>
          )}
        </div>
        <div className="space-x-24 flex">
          {extraIcon && extraIcon}
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
