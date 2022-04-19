import React, { createElement } from 'react'
import './text.css'

type TextProps = { 
  semanticHtmlTag?: string,
} & React.HTMLAttributes<HTMLDivElement>

export const MbText = (props: TextProps) => {
  
  if (props.semanticHtmlTag) {
    return createElement(props.semanticHtmlTag, { className: props.className }, props.children)
  }
  return <div className={`${props.className}`}>{props.children}</div>
}
