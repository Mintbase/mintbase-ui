export default function listenForOutsideClicks(
  listening: boolean,
  setListening: React.Dispatch<React.SetStateAction<boolean>>,
  menuRef: any,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  return () => {
    if (menuRef !== null) {
      if (listening) return
      setListening(true)
      ;[`click`, `touchstart`].forEach((type) => {
        document.addEventListener(
          `click`,
          (evt: any) => {
            if (menuRef?.current) {
              const firstElement = menuRef.current
                ? menuRef.current.firstChild
                : null
              const node = evt.target
              if (firstElement.contains(node)) return
              setIsOpen(false)
            }
          },
          false
        )
      })
    }
    return
  }
}
