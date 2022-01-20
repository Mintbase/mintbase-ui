import './networkmenu.css'
import { MbText } from '../../text/Text'
import { TNetworkOption } from '../../../types/network.type'

interface NetworkMenuProps {
  options: TNetworkOption[]
  onOptionChange: (selected: string) => void
}

export const MbNetworkMenu = (props: NetworkMenuProps) => {
  const { options, onOptionChange } = props
  return (
    <div className="network-menu">
      {options.map((option) => (
        <div className="network-item">
          <div className={`w-3 h-3 rounded-full ${option.indicatorColor}`} />
          <MbText
            className={'ml-8 p-small-90 align-center tracking-wider'}
            onClick={() => onOptionChange(option.value)}
          >
            {option.label}
          </MbText>
        </div>
      ))}
    </div>
  )
}
