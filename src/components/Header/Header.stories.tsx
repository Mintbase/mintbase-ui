import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react'
import Header from './Header'

export default {
title: 'Components/Headeroly',
component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (props) => <Header {...props} />

export const MintbaseLogo = Template.bind({});
MintbaseLogo.args = { logoUrl: './assets/MB_logo1.svg' }
