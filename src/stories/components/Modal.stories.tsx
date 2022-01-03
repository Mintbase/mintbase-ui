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
        <p className="p-big-130 pb-16">Number of Tokens</p>
        <p className="p-big-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          viverra purus. Sed aliquet augue mi, a pharetra lorem interdum nec.
          Aliquam interdum augue diam, vitae varius arcu sodales in. Morbi
          luctus lectus a elit suscipit, nec imperdiet nibh luctus.
        </p>
      </MbModal>
    </>
  )
}

export const Modal = Template.bind({})
Modal.args = {}
