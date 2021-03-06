import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbStatefulButton } from '../../components/stateful-button/StatefulButton'
import { MbText } from '../../components/text/Text'
import { MbIcon } from '../../components/icon/Icon'
import { EIconName } from '../../consts/icons'

export default {
  title: 'Components/StatefulButton',
  component: MbStatefulButton,
} as ComponentMeta<typeof MbStatefulButton>

const Template: ComponentStory<typeof MbStatefulButton> = ({
  indicator,
  content,
  className,
  hasEmptyStatus,
}) => (
  <div className={'flex'}>
    <MbStatefulButton
      className={className}
      indicator={indicator}
      content={content}
      hasEmptyStatus={hasEmptyStatus}
    />
  </div>
)

export const AccountConnected = Template.bind({})
AccountConnected.args = {
  indicator: <MbIcon name={EIconName.LINK} color={'inherit'} />,
  content: (
    <div className={'ml-8'}>
      <div className={'flex'}>
        <MbText className={'p-small-130'}>mintbase</MbText>
        <MbText className={'p-small-130 text-gray-300'}>.near</MbText>
      </div>
      <MbText className={'text-gray-300 cap-med-90'}>0.25 | 198.77</MbText>
    </div>
  ),
}

export const AccountDisconnected = Template.bind({})
AccountDisconnected.args = {
  className: 'bg-color-black',
  indicator: <MbIcon name={EIconName.LINK} color={'inherit'} />,
  content: <MbText className={'flex ml-8 p-small-90'}>Connect Wallet</MbText>,
  hasEmptyStatus: true,
}

export const NetworkNEARTESTNET = Template.bind({})
NetworkNEARTESTNET.args = {
  indicator: <div className={'w-3 h-3 rounded-full bg-yellow-500'} />,
  content: (
    <MbText className={'ml-8 p-small-90 align-center tracking-wider'}>
      NEAR TESTNET
    </MbText>
  ),
}

export const NetworkNEARMAINNET = Template.bind({})
NetworkNEARMAINNET.args = {
  indicator: <div className={'w-3 h-3 rounded-full bg-green-500'} />,
  content: (
    <MbText className={'ml-8 p-small-90 align-center tracking-wider'}>
      NEAR MAINNET
    </MbText>
  ),
}

export const NetworkETH = Template.bind({})
NetworkETH.args = {
  indicator: <div className={'w-3 h-3 rounded-full bg-blue-500'} />,
  content: (
    <MbText className={'ml-8 p-small-90 align-center tracking-wider'}>
      ETHEREUM
    </MbText>
  ),
}
