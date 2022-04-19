import React, { createElement } from 'react'
import './text.css'

type SemanticHtmlTextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'em' 

type TextProps = { 
  semanticHtmlTag?: SemanticHtmlTextTypes,
} & React.HTMLAttributes<HTMLDivElement>

export const MbText = (props: TextProps) => {
  if (props.semanticHtmlTag) {
    return createElement(props.semanticHtmlTag, { className: props.className }, props.children)
  }
  return <div className={`${props.className}`}>{props.children}</div>
}
