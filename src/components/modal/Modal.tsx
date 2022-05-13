import { MbIcon } from '../icon/Icon'
import { EIconName } from '../../consts/icons'
import './modal.css'
import { useEffect } from 'react'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  open: boolean
  onClose: () => void
}
export const MbModal = (props: ModalProps) => {
  const { open, onClose, title, children, subtitle } = props

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
        <div onClick={onClose}>
          <div className="fixed inset-0 bg-black bg-opacity-75 overflow-y-auto h-full w-full z-50"></div>
          <div className="modal">
            <section
              className="modal-section"
              onClick={(e) => e.stopPropagation()}
            >
              <header className="flex items-center p-24 border-b border-gray-150 dark:border-gray-700 justify-between sticky">
                <div>
                  <div className="p-big-130">{title}</div>
                  {subtitle && <div className="pt-4 p-med-90">{subtitle}</div>}
                </div>
                <div onClick={onClose}>
                  <MbIcon
                    name={EIconName.CLOSE}
                    size="20px"
                    color="blue-300"
                    darkColor="blue-100"
                    className="cursor-pointer"
                  />
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
