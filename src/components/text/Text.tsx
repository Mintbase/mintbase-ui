import React from 'react'
import './Text.css'

type TextProps = React.HTMLAttributes<HTMLDivElement>

export const MbText = (props: TextProps) => {
  return <div className={`${props.className}`}>{props.children}</div>
}
