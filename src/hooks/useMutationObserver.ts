import { useEffect, useState } from 'react'

/* hook got from rooks library, to check for mutations 
on children of the accordion and set the height
because useRef wasnt calculating well the clientHeight of the component.
*/

export const useMutationObserver = (
  ref: React.RefObject<any>,
  callback: MutationCallback,
  options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  }
) => {
  const [height, setHeight] = useState()

  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback)
      observer.observe(ref.current, options)

      if (ref.current.children.length == 1) {
        setHeight(ref.current.children[0].offsetHeight)
      }

      return () => observer.disconnect()
    }
  }, [callback, options])

  return { height: height }
}
