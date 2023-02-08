import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbButtonLink } from '../../../components/buttons/link/Link'
import { MbIcon } from '../../../components/icon/Icon'
import { EIconName } from '../../../consts'
import { ESize, EState, EType } from '../../../consts/properties'

export default {
  title: 'Components/Buttons/Link',
  component: MbButtonLink,
  argTypes: {},
} as ComponentMeta<typeof MbButtonLink>

const Template: ComponentStory<typeof MbButtonLink> = (args) => (
  <MbButtonLink {...args} />
)

export const Link = Template.bind({})
Link.args = {
  href: 'https://mintbase.xyz',
  icon: <MbIcon size="24" name={EIconName.TWITTER} color="black" darkColor="white" />,
  cssClass: '', target: "_blank", title: 'twitter'
}


export const LinkWithText = Template.bind({})
LinkWithText.args = {
  href: 'https://mintbase.xyz',
  icon: <MbIcon size="24" name={EIconName.WEB} color="black" darkColor="white" />,
  text: 'mintbase.xyz', cssClass: '', target: "_blank", title: 'website'
}


export const LinkNearSocial = Template.bind({})
LinkNearSocial.args = {
  href: 'https://mintbase.xyz',
  icon: <MbIcon size="111" height="24" name={EIconName.NEAR_SOCIAL_LONG} color="black" darkColor="white" />,
  cssClass: '',
  target: "_blank",
  title: 'Near Social',
  isNearSocial: true
}
