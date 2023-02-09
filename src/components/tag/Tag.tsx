import React from 'react'
import { EIconName } from '../../consts'
import { MbIcon } from '../icon/Icon'

interface ChipsProps extends React.HTMLAttributes<HTMLElement> {
  removeTag: () => void
}

export const MbTag = (props: ChipsProps) => {
  const { removeTag, children } = props

  return (
    <div className="flex gap-12 items-center rounded-full w-max relative bg-white dark:bg-gray-850 py-6 px-12">
      <div className="p-med-90 dark:text-white">{children}</div>
      <div
        className="cursor-pointer"
        title="Remove"
        onClick={() => removeTag()}
      >
        <MbIcon
          name={EIconName.CLOSE}
          size="16px"
          color="blue-300"
          darkColor="blue-100"
        />
      </div>
    </div>
  )
}
