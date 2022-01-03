import React from 'react'
import InlineSVG from 'react-inlinesvg'
import { EIconName } from '../../consts/icons'

enum IconType {
  MINTBASE = 'mintbase',
  CIRCLE = 'circle',
  MATERIAL = 'material',
}

const mintbaseIcons = [
  'facebook',
  'instagram',
  'pinterest',
  'twitter',
  'telegram',
  'medium',
  'linkedin',
  'youtube',
  'mintbase',
]

export const MbIcon = ({
  name,
  color = 'mb-blackblue',
  darkColor,
  size = '24px',
  className = '',
}: {
  name: EIconName
  color: string
  darkColor?: string
  size?: string
  className?: string
}) => {
  const iconType = () => {
    if (mintbaseIcons.includes(name)) return IconType.MINTBASE
    if (name === EIconName.CIRCLE) return IconType.CIRCLE
    return IconType.MATERIAL
  }

  // TODO: remove dynamic classNames once we start using tailwindcss purge feature
  return (
    <div className={`flex justify-center ${className}`}>
      {
        {
          [IconType.MINTBASE]: (
            <InlineSVG
              src={`/assets/icons/${name}.svg`}
              width={size}
              height={size}
              className={`fill-current text-${color} dark:text-${darkColor}`}
            />
          ),
          [IconType.MATERIAL]: (
            <span
              className={`material-icons text-${color} dark:text-${darkColor}`}
              style={{ fontSize: size }}
            >
              {name}
            </span>
          ),
          [IconType.CIRCLE]: (
            <div
              className={`w-3 h-3 rounded-full bg-${color} dark:bg-${darkColor}`}
            />
          ),
        }[iconType()]
      }
    </div>
  )
}
