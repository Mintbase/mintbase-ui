import './networkmenu.css'
import { MbText } from '../../text/Text'

interface NetworkMenuProps {
  onOptionChange: (selected: string) => void
}

const MbNetworkMenu = (props: NetworkMenuProps) => {
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

export default MbNetworkMenu
