import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from './Navbar'

export default {
title: 'Components/Navbar',
component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (props) => <Navbar {...props} />

export const MintbaseLogo = Template.bind({});
MintbaseLogo.args = { logoUrl: './assets/logo/mintbase1.svg' }

