import './networkmenu.css'
import { MbText } from '../../text/Text'
import { TNetworkOption } from '../../../types/network.type'

interface NetworkMenuProps {
  options: TNetworkOption[]
  isOpen?: boolean
  isInline?: boolean
  menuClassName?: string
  itemClassName?: string
  onOptionChange: (selected: string) => void
}

export const MbNetworkMenu = (props: NetworkMenuProps) => {
  const {
    options,
    isOpen,
    isInline,
    menuClassName,
    itemClassName,
    onOptionChange,
  } = props

  if (!isOpen) return null
  return (
    <div
      className={`network-menu ${
        isInline ? 'row no-scrollbar' : 'col'
      } ${menuClassName}`}
    >
      {options.map((option) => (
        <div
          className={`network-item ${itemClassName}`}
          onClick={() => onOptionChange(option.value)}
          key={option.value}
        >
          {option.indicator}
          <MbText className={'cap-big-130 align-center tracking-widest'}>
            {option.label}
          </MbText>
        </div>
      ))}
    </div>
  )
}
