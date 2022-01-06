import React from 'react'
import InlineSVG from 'react-inlinesvg/esm'

interface LogoProps {
  src: string
  width?: string
  height?: string
  className?: string
}
export const MbLogo = ({
  src,
  width = '128px',
  height = '32px',
  className = '',
}: LogoProps) => (
  <div className={className}>
    <InlineSVG
      src={src}
      width={width}
      height={height}
      className={`fill-current text-black dark:text-white`}
    />
  </div>
)
