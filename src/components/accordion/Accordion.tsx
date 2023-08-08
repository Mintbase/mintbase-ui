import React, { useEffect, useRef, useState } from 'react'
import { MbIcon } from '..'
import { EIconName } from '../..'
import { useMutationObserver } from '../../hooks/useMutationObserver'
import { MbTooltip } from '../tooltip/Tooltip'
import './Accordion.css'

interface AccordionProps {
  title: string | JSX.Element
  isOpen?: boolean
  isFixedAccordion?: boolean
  isVerifiedToken?: boolean
  extraIcon?: JSX.Element
  children: React.ReactNode
}

interface AccordionStatus {
  isExpanded: boolean
}

export const MbAccordion = (props: AccordionProps) => {
  const {
    title,
    isOpen = false,
    isFixedAccordion,
    extraIcon,
    isVerifiedToken,
    children,
  } = props

  const [accordionStatus, setAccordionStatus] = useState<AccordionStatus>({
    isExpanded: isOpen,
  })

  const [contentHeight, setContentHeight] = useState<number | undefined>()

  const contentRef = useRef<HTMLDivElement>(null)

  const { height } = useMutationObserver(contentRef, () => {
    return
  })

  const rotateIcon = accordionStatus.isExpanded ? 'rotate-180' : 'rotate-0'

  const { isExpanded } = accordionStatus

  const toggle = (): void => {
    if (isFixedAccordion) return
    setAccordionStatus({
      isExpanded: !isExpanded,
    })
  }

  useEffect(() => {
    if (isExpanded) {
      if (height !== undefined && height > 0) {
        setContentHeight(height)
      }
    }
  }, [height, isExpanded])

  useEffect(() => {
    setAccordionStatus({ isExpanded: isOpen })
  }, [isOpen])

  let accordionStyleClass = ''

  if (!isFixedAccordion) {
    if (isExpanded) {
      accordionStyleClass = 'expanded'
    } else {
      accordionStyleClass = 'notExpanded'
    }
  } else {
    accordionStyleClass = 'fixedAccordion'
  }

  return (
    <main className="rounded bg-white dark:bg-gray-850 dark:text-white accordion">
      <header
        className={`flex justify-between items-center p-12 md:p-24 border-gray-150 dark:border-gray-700 ${
          isFixedAccordion ? '' : 'cursor-pointer'
        } ${
          isExpanded || isFixedAccordion ? 'border-b' : 'border-b-0'
        } transition-all duration-200`}
        onClick={toggle}
      >
        <div className="flex gap-12 items-center p-big-130">
          {title}
          {isVerifiedToken && (
            <MbTooltip
              text="Token from Verified Store"
              pos="absolute"
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
        <div className="space-x-24 flex items-center">
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
      <section
        id={`${!isFixedAccordion ? 'content-wrapper' : ''}`}
        style={{ height: contentHeight }}
        className={accordionStyleClass}
        ref={contentRef}
      >
        <div id="content">{children}</div>
      </section>
    </main>
  )
}
