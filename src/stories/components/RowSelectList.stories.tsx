import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MbRowSelectList } from '../../components/row-select/RowSelectList'
import { MbText } from '../../components/text/Text'

export default {
  title: 'Components/RowSelectList',
  component: MbRowSelectList,
  argTypes: {},
} as ComponentMeta<typeof MbRowSelectList>

export const RowSelectList: ComponentStory<typeof MbRowSelectList> = () => (
  <MbRowSelectList
    elements={[
      {
        content: (
          <div className="cursor-pointer flex items-center gap-12">
            <div className="inline object-fit w-6 h-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://i.imgur.com/gu26H6Z.png"
              />
            </div>
            <MbText className="p-med-90 text-blue-300 dark:text-blue-100">
              mintbase1.near
            </MbText>
          </div>
        ),
        id: 'mintbase1.near',
        isDisabled: true,
      },
      {
        content: (
          <div className="cursor-pointer flex items-center gap-12">
            <div className="inline object-fit w-6 h-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://i.imgur.com/gu26H6Z.png"
              />
            </div>
            <MbText className="p-med-90 text-blue-300 dark:text-blue-100">
              mintbase2.near
            </MbText>
          </div>
        ),
        id: 'mintbase2.near',
        isDisabled: false,
      },
      {
        content: (
          <div className="cursor-pointer flex items-center gap-12">
            <div className="inline object-fit w-6 h-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://i.imgur.com/gu26H6Z.png"
              />
            </div>
            <MbText className="p-med-90 text-blue-300 dark:text-blue-100">
              mintbase3.near
            </MbText>
          </div>
        ),
        id: 'mintbase3.near',
        isDisabled: false,
      },
      {
        content: (
          <div className="cursor-pointer flex items-center gap-12">
            <div className="inline object-fit w-6 h-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://i.imgur.com/gu26H6Z.png"
              />
            </div>
            <MbText className="p-med-90 text-blue-300 dark:text-blue-100">
              mintbase4.near
            </MbText>
          </div>
        ),
        id: 'mintbase4.near',
        isDisabled: false,
      },
    ]}
    deleteRow={() => null}
    addMinters={() => null}
    removeMinters={(ids) => console.log('remove', ids)}
  />
)

export const RowWithRemoveDropdown: ComponentStory<typeof MbRowSelectList> = () => (
  <MbRowSelectList
    elements={[
      {
        content: (
          <div className="cursor-pointer flex items-center gap-12">
            <div className="inline object-fit w-6 h-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://i.imgur.com/gu26H6Z.png"
              />
            </div>
            <MbText className="p-med-90 text-blue-300 dark:text-blue-100">
              mintbase1.near
            </MbText>
          </div>
        ),
        id: 'mintbase1.near',
        isDisabled: true,
      },
      {
        content: (
          <div className="cursor-pointer flex items-center gap-12">
            <div className="inline object-fit w-6 h-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://i.imgur.com/gu26H6Z.png"
              />
            </div>
            <MbText className="p-med-90 text-blue-300 dark:text-blue-100">
              mintbase2.near
            </MbText>
          </div>
        ),
        id: 'mintbase2.near',
        isDisabled: false,
      },
      {
        content: (
          <div className="cursor-pointer flex items-center gap-12">
            <div className="inline object-fit w-6 h-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://i.imgur.com/gu26H6Z.png"
              />
            </div>
            <MbText className="p-med-90 text-blue-300 dark:text-blue-100">
              mintbase3.near
            </MbText>
          </div>
        ),
        id: 'mintbase3.near',
        isDisabled: false,
      },
      {
        content: (
          <div className="cursor-pointer flex items-center gap-12">
            <div className="inline object-fit w-6 h-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://i.imgur.com/gu26H6Z.png"
              />
            </div>
            <MbText className="p-med-90 text-blue-300 dark:text-blue-100">
              mintbase4.near
            </MbText>
          </div>
        ),
        id: 'mintbase4.near',
        isDisabled: false,
      },
    ]}
    deleteRow={() => null}
    addMinters={() => null}
    removeMinters={(ids) => console.log('remove', ids)}
    dropdownItems={[
      {
        content: <span>Generate QR Code</span>,
        onClick: () => console.log('asdasd'),
      },
      {
        content: <span>Create Deeplink</span>,
        onClick: () => console.log('asdasd'),
      },
    ]}
  />
)

