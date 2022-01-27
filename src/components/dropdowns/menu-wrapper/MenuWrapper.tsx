import { useEffect, useRef, useState } from 'react'
import listenForOutsideClicks from '../OutsideClickFunction'

interface MenuWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MbMenuWrapper = (props: MenuWrapperProps) => {
  const menuRef = useRef(null)
  const [listening, setListening] = useState(false)

  useEffect(
    listenForOutsideClicks(
      listening,
      setListening,
      menuRef,
      props.setIsMenuOpen
    )
  )

  return <div ref={menuRef}>{props.children}</div>
}
