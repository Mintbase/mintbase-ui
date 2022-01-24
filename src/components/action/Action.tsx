import React from 'react'
import { ESize, EState } from '../../consts/properties'
import { getFontType } from '../../consts/fontType'
import './action.css'

interface ActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: EState.ACTIVE | EState.DISABLED
  size?: ESize
}

export const MbAction = ({
  state = EState.ACTIVE,
  size = ESize.MEDIUM,
  ...props
}: ActionProps) => {
  return (
    <button className={`action ${state} ${getFontType(size)}`} {...props}>
      {props.children}
    </button>
  )
}
