import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { ESize, EState, EType } from '../../consts/properties'
import { MbButton } from './../../components/buttons/button/Button'
import MbModal from './../../components/modal/Modal'

export default {
  title: 'Components/Modal',
  component: MbModal,
  argTypes: {},
} as ComponentMeta<typeof MbModal>

const Template: ComponentStory<typeof MbModal> = (args) => {
  const [open, setIsOpen] = useState(false)
  return (
    <>
      <MbButton
        label="Open Modal"
        state={EState.ACTIVE}
        btnType={EType.PRIMARY}
        size={ESize.MEDIUM}
        onClick={() => setIsOpen(true)}
      />
      <MbModal
        {...args}
        open={open}
        title="Info"
        onClose={() => setIsOpen(false)}
      >
        <p>This is a modal content example.</p>
      </MbModal>
    </>
  )
}

export const Modal = Template.bind({})
Modal.args = {}
