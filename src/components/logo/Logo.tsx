import React from 'react'
import InlineSVG from 'react-inlinesvg/esm'

interface LogoProps {
  src: string
  width?: string
  className?: string
}
export const MbLogo = ({ src, width = '140px', className = '' }: LogoProps) => (
  <div className={className}>
    <InlineSVG
      src={src}
      width={width}
      className={`fill-current text-black dark:text-white`}
    />
  </div>
)
