import { HTMLAttributeAnchorTarget } from 'react';
import './link.css'

interface MbButtonProps { 
  href?: string, 
  icon: JSX.Element, 
  text?: string, 
  title?: string, 
  cssClass?: string, 
  target?: HTMLAttributeAnchorTarget, 
  isNearSocial?: boolean 
}

export const MbButtonLink = ({ href, icon, text, cssClass, target, title, isNearSocial }: MbButtonProps
  ) => {

  const style = 'relative rounded transition-all duration-500 socialIcon';
  let css = cssClass ? `${style} ${cssClass}` : style;

  if (text) {
    css = `${css} socialIconText pl-1 pr-3`
  } else if (!isNearSocial) {
    css = `${css} smallSocialIcon`
  } else {
    css = `${css} nearSocialIcon`
  }

  return (
    <a
      className={css}
      {...(title ? { title: title } : {})}
      {...(href ? { href: href } : {})}
      {...(target ? { target: target } : {})}
    >
      {icon ? icon : null}
      {text || !isNearSocial ? <span>{text}</span> : null}
    </a>)

}