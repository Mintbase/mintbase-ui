export default function listenForOutsideClicks(
  listening: boolean,
  setListening: React.Dispatch<React.SetStateAction<boolean>>,
  menuRef: any,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  return () => {
    if (menuRef !== null) {
      if (listening) return
      if (!menuRef.current) return
      setListening(true)
      ;[`click`, `touchstart`].forEach((type) => {
        document.addEventListener(
          `click`,
          (evt: any) => {
            const cur = menuRef.current
            const node = evt.target
            if (cur.contains(node)) return
            setIsOpen(false)
          },
          false
        )
      })
    }
    return
  }
}
