import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MbTooltip } from '../../components/tooltip/Tooltip'
import { MbIcon } from '../../components/icon/Icon'
import { EIconName } from '../../consts/icons'

export default {
  title: 'Components/Tooltip',
  component: MbTooltip,
  argTypes: {},
} as ComponentMeta<typeof MbTooltip>

const Template: ComponentStory<typeof MbTooltip> = (args) => (
  <>
    <p className="med-p mb-12">
      hover the icon. place can be 'top', 'bottom', 'left' or 'right'
    </p>
    <div className="w-full md:w-3/4 flex items-center mt-24 ml-96">
      <MbTooltip {...args} />
    </div>
  </>
)

export const Tooltip = Template.bind({})
Tooltip.args = {
  text: 'Tooltip text!',
  component: (
    <MbIcon size="26px" name={EIconName.MINTBASE} color="mb-blackblue" />
  ),
  place: 'left',
}
