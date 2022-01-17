import React from 'react'
import InlineSVG from 'react-inlinesvg'
import { EIconName } from '../../consts/icons'
import facebookIcon from './assets/facebook.svg'
import instagramIcon from './assets/instagram.svg'
import linkedinIcon from './assets/linkedin.svg'
import mediumIcon from './assets/medium.svg'
import mintbaseIcon from './assets/mintbase.svg'
import pinterestIcon from './assets/pinterest.svg'
import telegramIcon from './assets/telegram.svg'
import twitterIcon from './assets/twitter.svg'
import youtubeIcon from './assets/youtube.svg'

enum IconType {
  MINTBASE = 'mintbase',
  CIRCLE = 'circle',
  MATERIAL = 'material',
}

const customIcons: {[key: string]: string} = {
  [EIconName.FACEBOOK]: facebookIcon,
  [EIconName.INSTAGRAM]: instagramIcon,
  [EIconName.PINTEREST]: pinterestIcon,
  [EIconName.TWITTER]: twitterIcon,
  [EIconName.TELEGRAM]: telegramIcon,
  [EIconName.MEDIUM]: mediumIcon,
  [EIconName.LINKEDIN]: linkedinIcon,
  [EIconName.YOUTUBE]: youtubeIcon,
  [EIconName.MINTBASE]: mintbaseIcon,
}

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
    if (Object.keys(customIcons).includes(name)) return IconType.MINTBASE
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
              src={customIcons[name as string]}
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
