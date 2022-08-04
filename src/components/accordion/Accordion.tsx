import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
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

interface ContentElement {
  wrapper: HTMLElement | undefined
  content: HTMLElement | undefined
}

interface AccordionStatus {
  isDirty: boolean
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
    isDirty: false,
  })
  const [contentElements, setContentElements] = useState<ContentElement>({
    wrapper: undefined,
    content: undefined,
  })
  const [wrapperId, setWrapperId] = useState('')

  const contentRef = useRef<HTMLElement>(null)

  const contentAnimation = (): void => {
    if (isFixedAccordion) return

    const { wrapper, content } = contentElements

    if (!wrapper || !content) return

    const addHeight = () => (wrapper.style.height = content.clientHeight + 'px')

    if (
      content.clientHeight !== wrapper.clientHeight &&
      wrapper.clientHeight &&
      isExpanded
    ) {
      addHeight()
      return
    }

    if (wrapper.clientHeight && isDirty) {
      wrapper.style.height = '0'
    } else {
      addHeight()
    }
  }

  const toggle = (): void => {
    if (isFixedAccordion) return
    setAccordionStatus({
      isDirty: true,
      isExpanded: !accordionStatus.isExpanded,
    })
    contentAnimation()
  }

  const rotateIcon = accordionStatus.isExpanded ? 'rotate-180' : 'rotate-0'

  const { isDirty, isExpanded } = accordionStatus

  const getWrapperId = (): string => {
    if (isFixedAccordion) {
      return ''
    }

    if (isDirty) {
      return 'content-wrapper'
    } else if (isOpen) {
      return ''
    }
    return 'content-wrapper'
  }

  useLayoutEffect(() => {
    if (contentRef) {
      const wrapper = contentRef.current?.children[1] as HTMLElement
      setContentElements({
        wrapper,
        content: wrapper?.children[0] as HTMLElement,
      })
    }
  }, [contentRef])

  useEffect(() => {
    if (!isExpanded) return
    contentAnimation()
  }, [contentElements?.content?.clientHeight])

  useEffect(() => {
    setWrapperId(getWrapperId())
    contentAnimation()
  }, [isDirty])

  return (
    <main
      className="rounded bg-white dark:bg-gray-850 dark:text-white"
      ref={contentRef}
    >
      <header
        className={`flex justify-between items-center p-24 border-gray-150 dark:border-gray-700 ${
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
      <section id={wrapperId}>
        <div id="content">{children}</div>
      </section>
    </main>
  )
}
