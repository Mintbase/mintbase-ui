import { useMemo, useState } from 'react'
import { EIconName, ESize } from '../../consts'
import { MbText } from '../text/Text'
import { MbIcon } from '../icon/Icon'

export const MbActionText = ({
  size,
  text,
  copyText,
  iconTab,
  iconCopy,
  link,
}: {
  size: ESize
  text: string
  copyText?: string
  iconTab?: boolean
  iconCopy?: boolean
  link?: string
}) => {
  const [showLinkCopiedText, setShowLinkCopiedText] = useState(false)

  const getFontClass = () => {
    switch (size) {
      case ESize.BIG:
        return 'p-big-90'
      case ESize.SMALL:
        return 'p-small-90'
      default:
        return 'p-med-90'
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyText || link || text)
    setShowLinkCopiedText(true)
    setTimeout(() => setShowLinkCopiedText(false), 3000)
  }

  const iconSize = useMemo(() => {
    switch (size) {
      case ESize.BIG:
        return '14px'
      case ESize.SMALL:
        return '10px'
      default:
        return '12px'
    }
  }, [size])

  return (
    <div className="flex items-center justify-center gap-8">
      <a
        href={link}
        className="flex items-center justify-center gap-0.5 opacity-100 hover:opacity-70 transition ease-in-out duration-500 cursor-pointer"
        {...(iconTab && { target: 'blank' })}
      >
        <MbText
          className={`${getFontClass()} text-blue-300 dark:text-blue-100`}
        >
          {text}
        </MbText>
        {iconTab ? (
          <MbIcon
            name={EIconName.ARROW_DIAGONAL}
            color="blue-300"
            darkColor="blue-100"
            size={iconSize}
          />
        ) : null}
      </a>
      {iconCopy ? (
        <div className="relative">
          <div className="cursor-pointer group" onClick={handleCopy}>
            <MbIcon
              name={EIconName.EDITIONS}
              color={`${
                showLinkCopiedText
                  ? 'blue-300 dark:text-blue-100'
                  : 'gray-700 dark:text-gray-300 group-hover:text-blue-300 dark:group-hover:text-blue-100'
              } transition ease-in-out duration-500`}
              size={iconSize}
            />
          </div>
          {showLinkCopiedText ? (
            <div className="p-8 bg-black bg-opacity-60 rounded absolute -top-8 z-50 left-1/2 transform -translate-x-1/2">
              <MbText className="text-white cap-big-90">Copied!</MbText>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
