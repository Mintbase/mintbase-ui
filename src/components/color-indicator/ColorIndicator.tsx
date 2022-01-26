interface ColorIndicatorProps {
  parentClassName?: string
  childClassName?: string
}

export const MbColorIndicator = (props: ColorIndicatorProps) => {
  const { parentClassName, childClassName } = props
  return (
    <div
      className={`flex items-center justify-center w-4 h-4 ${
        parentClassName ?? ''
      }`}
    >
      <div className={`w-3 h-3 rounded-full ${childClassName ?? ''}`}></div>
    </div>
  )
}
