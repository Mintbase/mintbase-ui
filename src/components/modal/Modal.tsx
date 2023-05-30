import { MbIcon } from '../icon/Icon'
import { EIconName } from '../../consts/icons'
import './modal.css'
import { useEffect } from 'react'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  topTitle: string | JSX.Element
  subtitle?: string
  topElement?: JSX.Element
  topElementFirst?: boolean
  open: boolean
  onClose: () => void
}
export const MbModal = (props: ModalProps) => {
  const {
    open,
    onClose,
    topTitle,
    children,
    subtitle,
    topElement,
    topElementFirst,
  } = props

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('overflow-hidden')
    } else {
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [open])
  return (
    <>
      {open && (
        <div
          onClick={() => {
            const element = document.getElementById('modal-wrapper')
            if (!element) return
            element.classList.add('modal-hide')
            setTimeout(onClose, 300)
          }}
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto h-full w-full z-50"></div>
          <div id="modal-wrapper" className="modal modal-scale">
            <section
              className="modal-section"
              onClick={(e) => e.stopPropagation()}
            >
              <header className="flex items-center p-24 border-b border-gray-150 dark:border-gray-700 justify-between sticky">
                <div
                  className={`${topElementFirst ? 'flex items-center' : ''}`}
                >
                  {topElementFirst && (
                    <div className="order-first">
                      {topElement && topElement}
                    </div>
                  )}
                  <div>
                    <div className="p-big-130">{topTitle}</div>
                    {subtitle && (
                      <div className="pt-4 p-med-90">{subtitle}</div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-12">
                  {!topElementFirst && <div>{topElement && topElement}</div>}
                  <div
                    onClick={() => {
                      const element = document.getElementById('modal-wrapper')
                      if (!element) return
                      element.classList.add('modal-hide')
                      setTimeout(onClose, 300)
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
