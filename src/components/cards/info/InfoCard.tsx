import React from 'react'
import { EIconName } from '../../../consts/icons'
import { ESize } from '../../../consts/properties'
import { TInfoCard } from '../../../types/cards.type'
import { MbIcon } from '../../icon/Icon'
import { MbTooltip } from '../../tooltip/Tooltip'
import './infocard.css'

const LoadingInfoBox = ({ size }: { size: ESize }) => {
  return (
    <div className={`info-card ${size}`}>
      <div
        className={`flex justify-between items-center title-wrapper ${size} relative animate-pulse`}
      >
        <div className="h-4 w-16 bg-gray-600 rounded"></div>
      </div>
      <div className="flex space-x-12 items-center animate-pulse">
        <div className="h-6 w-2/3 rounded bg-gray-600"></div>
      </div>
    </div>
  )
}

export const MbInfoCard = ({ boxInfo }: { boxInfo: TInfoCard }) => {
  const {
    loading = false,
    title,
    titleIcon,
    description,
    descriptionIcon = EIconName.NONE,
    descriptionImage,
    upperIcon,
    isBigDescription = true,
    isNumber,
    lowerLeftText,
    size = ESize.MEDIUM,
    isLink,
  } = boxInfo

  if (loading) return <LoadingInfoBox size={size} />

  const getDescriptionFont = () => {
    if (size === 'small') {
      return isBigDescription && isNumber ? 'p-big-90' : 'p-small-90'
    }
    return isBigDescription && isNumber ? 'p-sub-90' : 'p-big-90'
  }

  const getTitleFont = () => {
    if (size === 'small') {
      return 'cap-big-90'
    }
    return 'p-small-90'
  }

  return (
    <div
      className={`info-card ${size} ${
        isLink
          ? 'hover:bg-blue-300-15 dark:hover:bg-blue-100-15 group transition ease-in-out duration-500 cursor-pointer'
          : ''
      }`}
    >
      <div
        className={`flex ${
          titleIcon ? 'gap-12' : 'justify-between'
        } items-center title-wrapper ${size} relative`}
      >
        {titleIcon && titleIcon}
        <div className={`${getTitleFont()} text-gray-700 dark:text-gray-300`}>
          {title}
        </div>

        {upperIcon && <div className="absolute right-0 mt-4">{upperIcon}</div>}
      </div>
      <div className="flex space-x-12 items-center">
        {descriptionIcon !== EIconName.NONE && !descriptionImage && (
          <MbIcon
            name={descriptionIcon}
            size="24px"
            color="blue-300"
            darkColor="blue-100"
          ></MbIcon>
        )}
        {descriptionImage && descriptionIcon === EIconName.NONE && (
          <div>
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={descriptionImage}
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-between w-full items-baseline">
          {description && (
            <div className={`${lowerLeftText ? '' : 'w-full'}`}>
              <div
                className={`${getDescriptionFont()} ${
                  isLink
                    ? 'text-blue-300 dark:text-blue-100 cursor-pointer'
                    : 'text-black dark:text-white'
                } ${
                  lowerLeftText ? 'inline-flex' : 'w-5/6 truncate'
                } align-middle`}
              >
                {description}
              </div>
            </div>
          )}
          {lowerLeftText && (
            <div className="p-med-90 text-gray-700 dark:text-gray-300">
              {lowerLeftText}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
