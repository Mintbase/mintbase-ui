import React from 'react'
import './text.css'

type TextProps = React.HTMLAttributes<HTMLDivElement>

export const MbText = (props: TextProps) => {
  return <div className={`${props.className}`}>{props.children}</div>
}
