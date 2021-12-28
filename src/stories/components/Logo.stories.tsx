import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbLogo } from '../../components/logo/Logo'

export default {
  title: 'Components/Logo',
  component: MbLogo,
  argTypes: {},
} as ComponentMeta<typeof MbLogo>

export const Logo: ComponentStory<typeof MbLogo> = () => (
  <MbLogo src={'./assets/logo/mintbase1.svg'} />
)
