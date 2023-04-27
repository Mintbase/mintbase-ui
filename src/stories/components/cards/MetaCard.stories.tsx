import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbMetaCard } from '../../../components/cards/meta/MetaCard'
import { MbIcon } from '../../../components/icon/Icon'
import { EIconName } from '../../../consts/icons'

export default {
  title: 'Components/Cards',
  component: MbMetaCard,
  argTypes: {},
} as ComponentMeta<typeof MbMetaCard>

const Template: ComponentStory<typeof MbMetaCard> = (args) => (
  <div className="w-1/4">
    <MbMetaCard {...args} />
  </div>
)

export const MetaCard = Template.bind({})
MetaCard.args = {
  metaCardHeaderData: {
    onMetaCardImageClick: null,
    nftTypeIcon: EIconName.IMAGE,
    metaCardImage: (
      <img
        className="h-full w-full object-cover"
        src="https://i.imgur.com/gu26H6Z.png"
      />
    ),
  },
  metaCardInfo: {
    storeNameElement: 'test.mintbase1.near',
    nftTitle: 'Meta Card NFT',
    minterImage: (
      <img
        className="h-full w-full object-cover"
        src="https://i.imgur.com/gu26H6Z.png"
      />
    ),
    tokenListings: '10',
    priceWidget: (
      <div className='flex gap-0.5'>
        10
        <MbIcon name={EIconName.NEAR} color="black" darkColor="white" />{' '}
      </div>
    ),
    onMinterImageClick: null,
  },
}
