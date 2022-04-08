import React from 'react'
import ReactTooltip, { Place } from 'react-tooltip'
import './tooltip.css'

export const MbTooltip = ({
  text,
  id,
  place = 'bottom',
  component,
  extraProps = {}
}: {
  text: string
  id: string
  place: Place
  component: JSX.Element
  extraProps?: Record<string, any>
}) => {
  return (
    <>
      <span data-tip data-for={id} className="w-min flex cursor-pointer">
        {component}
      </span>
      <ReactTooltip
        id={id}
        type="info"
        effect="solid"
        clickable
        place={place}
        class="tooltip"
        backgroundColor="rgba(0,0,0,0.6)"
        arrowColor="transparent"
        getContent={() => {
          return <span className="cap-big-90">{text}</span>
        }}
        {...extraProps}
      />
    </>
  )
}
