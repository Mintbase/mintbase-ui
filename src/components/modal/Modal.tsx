import { MbIcon } from '../icon/Icon'
import { EIconName } from '../../consts/icons'
import './modal.css'
import { useEffect } from 'react'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  topTitle: string | JSX.Element
  subtitle?: string
  topElement?: JSX.Element
  open: boolean
  onClose: () => void
}
export const MbModal = (props: ModalProps) => {
  const { open, onClose, topTitle, children, subtitle, topElement } = props

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])
  return (
    <>
      {open && (
        <div
          id="modal-wrapper"
          onClick={() => {
            var element = document.getElementById('modal-wrapper')
            if (!element) return
            element.classList.add('w3-animate-show')
            setTimeout(onClose, 800)
          }}
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto h-full w-full z-50 w3-animate-opacity"></div>
          <div className="modal w3-animate-opacity">
            <section
              className="modal-section"
              onClick={(e) => e.stopPropagation()}
            >
              <header className="flex items-center p-24 border-b border-gray-150 dark:border-gray-700 justify-between sticky">
                <div>
                  <div className="p-big-130">{topTitle}</div>
                  {subtitle && <div className="pt-4 p-med-90">{subtitle}</div>}
                </div>
                <div className="flex items-center gap-12">
                  {topElement && topElement}
                  <div
                    onClick={() => {
                      var element = document.getElementById('modal-wrapper')
                      if (!element) return
                      element.classList.add('w3-animate-show')
                      setTimeout(onClose, 800)
                    }}
                  >
                    <MbIcon
                      name={EIconName.CLOSE}
                      size="20px"
                      color="blue-300"
                      darkColor="blue-100"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </header>
              <div>{children}</div>
            </section>
          </div>
        </div>
      )}
    </>
  )
}
