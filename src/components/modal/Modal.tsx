interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  open: boolean
  onClose: () => void
}
const MbModal = (props: ModalProps) => {
  const { open, onClose, title, children } = props
  return (
    <>
      {open && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white dark:bg-gray-850 rounded">
            <header className="flex items-center p-32">{title}</header>
            {children}
          </div>{' '}
        </div>
      )}
    </>
  )
}

export default MbModal
