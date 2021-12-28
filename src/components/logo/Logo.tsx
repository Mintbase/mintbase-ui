import React from 'react'
import InlineSVG from 'react-inlinesvg/esm'

interface LogoProps {
  src: string
  width?: string
}
export const MbLogo = ({ src, width = '140px' }: LogoProps) => (
  <div className="m-10">
    <InlineSVG
      src={src}
      width={width}
      className={`fill-current text-black dark:text-white`}
    />
  </div>
)
