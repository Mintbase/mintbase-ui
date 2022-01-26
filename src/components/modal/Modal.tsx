import { MbIcon } from '../icon/Icon'
import { EIconName } from '../../consts/icons'
import './modal.css'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  open: boolean
  onClose: () => void
}
export const MbModal = (props: ModalProps) => {
  const { open, onClose, title, children } = props
  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-black dark:border-gray-700 bg-opacity-75 overflow-y-auto h-full w-full"></div>
          <div className="modal">
            <section className="modal-section">
              <header className="flex items-center p-24 border-b border-gray-150 dark:border-gray-700 justify-between">
                <div className="p-big-130">{title}</div>
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
              <div className="p-24">{children}</div>
            </section>
          </div>
        </>
      )}
    </>
  )
}
