import React from 'react'
import { EIconName } from '../../../consts'
import { getFontType } from '../../../consts/fontType'
import { ESize, EState, EType } from '../../../consts/properties'
import { Item, MbDropdownMenu } from '../../dropdowns/dropdown-menu/DropdownMenu'
import { MbMenuWrapper } from '../../dropdowns/menu-wrapper/MenuWrapper'
import { MbIcon } from '../../icon/Icon'
import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  btnType?: EType
  state?: EState
  size?: ESize
  customClass?: string
  dropDownItems?: Item[] | undefined
}

const getLoadingSize = (currentSize: string) => {
  switch (currentSize) {
    case 'small':
      return 'w-3.5 h-3.5'
    case 'medium':
      return 'w-4 h-4'
    case 'big':
      return 'w-5 h-5'
    default:
      return 'w-4 h-4'
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
  dropDownItems = undefined,
  customClass,
  ...props
}: ButtonProps) => {
  const isLoading = state === EState.LOADING
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  return (
    <div className={`${dropDownItems ? 'flex gap-4' : ''}`}>
      <button
        type="button"
        className={`button ${btnType} ${state} ${
          customClass ? customClass : `${size} ${getFontType(size)}`
        } relative`}
        {...props}
      >
        <span className={isLoading ? 'invisible' : 'visible'}>{label}</span>
        {isLoading && <LoadingAnimation btnType={btnType} size={size} />}
      </button>
      {dropDownItems && (
        <div className="relative">
          <MbMenuWrapper setIsOpen={setIsDropdownOpen}>
            <button
              type="button"
              className={`button ${btnType}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <MbIcon
                name={EIconName.ARROW_DROP_DOWN}
                size="30px"
                color="white"
                darkColor="white"
              />
            </button>
            <MbDropdownMenu
              items={dropDownItems}
              isOpen={isDropdownOpen}
              className="left-0"
            />
          </MbMenuWrapper>
        </div>
      )}
    </div>
  )
}
