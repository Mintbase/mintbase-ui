import React, { useEffect, useRef, useState } from 'react'
import { MbIcon } from '..'
import { EIconName } from '../..'
import { MbTooltip } from '../tooltip/Tooltip'
import './Accordion.css'

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

  const contentRef = useRef<HTMLElement>(null)

  const contentAnimation = () => {
    const wrapper = contentRef.current?.children[1] as HTMLElement
    const content = contentRef.current?.children[1]?.children[0] as HTMLElement

    if (!content) return
    if (!wrapper) return

    if (wrapper.clientHeight) {
      wrapper.style.height = '0'
    } else {
      if (!content) return
      wrapper.style.height = content.clientHeight + 'px'
    }
  }

  const toggle = () => {
    if (isFixedAccordion) return
    setIsExpanded(!isExpanded)
    contentAnimation()
  }

  const rotateIcon = isExpanded ? 'rotate-180' : 'rotate-0'

  useEffect(() => {
    if (!isFixedAccordion) return
    contentAnimation()
  }, [isFixedAccordion])

  return (
    <main
      className="rounded bg-white dark:bg-gray-850 dark:text-white"
      ref={contentRef}
    >
      <header
        className={`flex justify-between items-center p-24 border-gray-150 dark:border-gray-700 ${
          isFixedAccordion ? '' : 'cursor-pointer'
        } ${
          isExpanded ? 'border-b' : 'border-b-0'
        } transition-all duration-300`}
        onClick={toggle}
      >
        <div className="flex gap-12 items-center p-big-130">
          {title}
          {isVerifiedToken && (
            <MbTooltip
              text="Token from Verified Store"
              id="verified-token"
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
              name={EIconName.ARROW_EXPAND_MORE}
              size="20px"
              color="black"
              darkColor="white"
              className={`transform transition ease-in-out duration-300 ${rotateIcon}`}
            />
          )}
        </div>
      </header>
      <section id="content-wrapper">
        <div id="content">{children}</div>
      </section>
    </main>
  )
}
