import './tooltip.css'

export const MbTooltip = ({
  text,
  component,
}: {
  text: string
  component: JSX.Element
}) => {
  return (
    <div className="relative">
      <span className="w-min mb-tooltip flex cursor-pointer">
        {component}
        <span className="tooltip-text">
        {text}
      </span>
      </span>
    </div>
  )
}