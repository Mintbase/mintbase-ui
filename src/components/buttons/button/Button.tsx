import React from 'react'
import { getFontType } from '../../../consts/fontType'
import { ESize, EState, EType } from '../../../consts/properties'
import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  btnType?: EType
  state?: EState
  size?: ESize
}

const getLoadingSize = (currentSize: string) => {
  switch (currentSize) {
    case 'small':
      return 'w-3.5 h-3.5'
    case 'medium':
      return 'w-4 h-4'
    case 'big':
      return 'w-5 h-5'
  }
}

const LoadingAnimation = ({
  size,
  btnType,
}: {
  size: string
  btnType: string
}) => (
  <div className="animate-pulse absolute inline w-full left-0">
    <div
      className={`rounded-full ${
        btnType === EType.SECONDARY
          ? 'bg-black dark:bg-white'
          : 'bg-white dark:bg-black'
      } ${getLoadingSize(size)} m-0-auto`}
    ></div>
  </div>
)

export const MbButton = ({
  label = 'default',
  state = EState.ACTIVE,
  size = ESize.MEDIUM,
  btnType = EType.PRIMARY,
  ...props
}: ButtonProps) => {
  const isLoading = state === EState.LOADING
  return (
    <button
      type="button"
      className={`button ${btnType} ${state} ${size} ${getFontType(
        size
      )} relative`}
      {...props}
    >
      <span className={isLoading ? 'invisible' : 'visible'}>{label}</span>
      {isLoading && <LoadingAnimation btnType={btnType} size={size} />}
    </button>
  )
}
