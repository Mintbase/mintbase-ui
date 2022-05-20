import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { MbButton } from '../../components/buttons/button/Button'
import { MbModal } from '../../components/modal/Modal'
import { MbAction } from '../../components/action/Action'
import { ESize, EState, EType } from '../../consts/properties'

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
        label="Open modal"
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
        <div className="p-24">
          <p className="p-big-130 pb-16">Number of Tokens</p>
          <p className="p-big-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at viverra purus. Sed aliquet augue mi, a pharetra lorem interdum
            nec. Aliquam interdum augue diam, vitae varius arcu sodales in.
            Morbi luctus lectus a elit suscipit, nec imperdiet nibh luctus.
          </p>
        </div>
      </MbModal>
    </>
  )
}

export const Modal = Template.bind({})
Modal.args = {}

const TopElementTemplate: ComponentStory<typeof MbModal> = (args) => {
  const [open, setIsOpen] = useState(false)
  return (
    <>
      <MbButton
        label="Open modal"
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
        topElement={
          <MbAction>
            <span>Help</span>
          </MbAction>
        }
      >
        <div className="p-24">
          <p className="p-big-130 pb-16">Number of Tokens</p>
          <p className="p-big-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at viverra purus. Sed aliquet augue mi, a pharetra lorem interdum
            nec. Aliquam interdum augue diam, vitae varius arcu sodales in.
            Morbi luctus lectus a elit suscipit, nec imperdiet nibh luctus.
          </p>
        </div>
      </MbModal>
    </>
  )
}

export const ModalWithTopElement = TopElementTemplate.bind({})
ModalWithTopElement.args = {}
