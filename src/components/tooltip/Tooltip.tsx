import './tooltip.css'

export const MbTooltip = ({
  text,
  component,
  pos,
  classname= '',
}: {
  text: string
  component: JSX.Element,
  pos: string
  classname?: string
}) => {

  let cssClass = `mb-tooltip`
  
  if(pos === 'absolute') cssClass = `mb-tooltip tooltip-absolute`
  
  if(pos === 'fixed') cssClass = `mb-tooltip tooltip-fixed`

  return (
    <div className="relative">
      <span className={`w-min mb-tooltip flex ${cssClass} ${classname} cursor-pointer`} aria-label={text}>
        {component}
      </span>
    </div>
  )
}