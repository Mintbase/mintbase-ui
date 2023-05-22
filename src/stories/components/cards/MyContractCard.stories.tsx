import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { Children } from 'react'
import { MbContractCard } from '../../../components/cards/contractCards/MyContractCard'

export default {
  title: 'Components/Cards',
  component: MbContractCard,
  argTypes: {},
} as ComponentMeta<typeof MbContractCard>

const Template: ComponentStory<typeof MbContractCard> = (args) => (
  <div className="w-1/4">
    <MbContractCard {...args} />
  </div>
)

export const ContractCard = Template.bind({})
ContractCard.args = {
  storeId: 'test.mintbase1.near',
  isMinter: true,
  shouldSeeSettings: true,
  contractNftsUrl: '/contract/test.mintbase1.near/nfts/all/0',
  contractSettingsUrl: '/contract/2cool.mintbase1.near/settings',
  isVerified: true,
  hasStores: true,
  profileImage: 'https://i.imgur.com/gu26H6Z.png',
  bgImage: 'https://i.imgur.com/gu26H6Z.png',
  storeName: 'test.mintbase1.near',
  Image: (
    <img
      className="h-full w-full object-cover"
      src="https://i.imgur.com/gu26H6Z.png"
    />
  ),
  Link: <a href="/contract/test.mintbase1.near/nfts/all/0">{Children}</a>,
}
