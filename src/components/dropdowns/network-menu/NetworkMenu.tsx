import './networkmenu.css'
import { MbText } from '../../text/Text'
import { TNetworkOption } from '../../../types/network.type'

interface NetworkMenuProps {
  options: TNetworkOption[]
  onOptionChange: (selected: string) => void
}

export const MbNetworkMenu = (props: NetworkMenuProps) => {
  const { onOptionChange } = props
  return (
    <div className="network-menu">
      {[
        { label: 'NEAR TESTNET', value: 'testnet' },
        { label: 'NEAR MAINNET', value: 'mainnet' },
        { label: 'ETHEREUM', value: 'ethereum' },
      ].map((network) => (
        <MbText
          className={'ml-8 p-small-90 align-center tracking-wider'}
          onClick={() => onOptionChange(network.value)}
        >
          {network.label}
        </MbText>
      ))}
    </div>
  )
}
