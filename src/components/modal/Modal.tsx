interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
}
const MbModal = (props: ModalProps) => {
  const { open, onClose, children } = props
  return (
    <>
      {open && <div className="bg-white dark:bg-gray-850 p-24">{children}</div>}
    </>
  )
}

export default MbModal
