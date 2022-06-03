import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbRowSelectList } from '../../components/row-select/RowSelectList'

export default {
  title: 'Components',
  component: MbRowSelectList,
  argTypes: {},
} as ComponentMeta<typeof MbRowSelectList>

export const RowSelectList: ComponentStory<typeof MbRowSelectList> = () => (
  <MbRowSelectList />
)
