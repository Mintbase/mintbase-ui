import React from 'react'
import { MbIcon } from '../../icon/Icon'
import { TThingCard } from '../../../types/cards.type'
import { EIconName } from '../../../consts/icons'
import './thingcard.css'
import './../cards.css'
interface CardProps extends React.ComponentProps<'div'> {
  loading?: boolean
  cardInfo: TThingCard
}

const LoadingCard = () => {
  return (
    <div className="base-card p-12">
      <div className="flex flex-row justify-between mb-12 animate-pulse">
        <div className="h-4 w-8 rounded bg-gray-600"></div>
        <div className="h-4 w-8 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-col justify-center items-center animate-pulse loading-card-image">
        <div className="h-full w-full rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between mt-12 animate-pulse">
        <div className="h-4 w-8 rounded bg-gray-600"></div>
        <div className="h-4 w-8 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between mt-12 animate-pulse">
        <div className=" w-6 h-6 rounded-full bg-gray-600"></div>
        <div className="flex flex-row items-center">
          <div className="h-4 w-8 rounded bg-gray-600"></div>
        </div>
      </div>
    </div>
  )
}

export const MbThingCard = ({ loading = false, cardInfo }: CardProps) => {
  if (loading) return <LoadingCard />
  const {
    upperLeftIcon = EIconName.LIKE,
    upperLeftText,
    upperRightElement,
    centerElement,
    isCenterImage,
    midLeftText,
    midRightText,
    botLeftImage,
    botRightIcon = EIconName.EDITIONS,
    botRightText,
    onBotLeftImageClick,
    onCenterElementClick,
    onUpperLeftClick,
  } = cardInfo

  return (
    <div className="base-card thing p-12">
      <div className="flex flex-row justify-between items-center text-black dark:text-white mb-12">
        <div className="flex space-x-8 items-center">
          <div className="flex" onClick={onUpperLeftClick}>
            <MbIcon
              name={upperLeftIcon}
              size="20px"
              color="black"
              darkColor="white"
            />
          </div>
          <p
            className="p-small-90 text-gray-700 dark:text-gray-300"
            style={{ marginTop: '4px' }}
          >
            {upperLeftText}
          </p>
        </div>
        {upperRightElement && <div className="flex">{upperRightElement}</div>}
      </div>
      <div className="flex flex-col justify-center items-center thing-card-image">
        <div
          className="h-full w-full rounded overflow-hidden relative pt-56 sm:pt-72 lg:pt-68"
          onClick={onCenterElementClick}
        >
          {isCenterImage && (
            <div className="w-5 h-5 bg-black rounded-full absolute top-3 left-3 z-10 flex items-center justify-center">
              <MbIcon name={EIconName.IMAGE} size="14px" color="white" />
            </div>
          )}

          <div className="absolute inset-0">{centerElement}</div>
        </div>
      </div>
      <div className="flex flex-row justify-between text-black dark:text-white mt-12">
        <div className="p-big-90 w-48 sm:w-64 truncate">{midLeftText}</div>
        <div className="p-big-90 w-24 text-right">{midRightText}</div>
      </div>
      <div className="flex flex-row justify-between text-gray-200 mt-12">
        <div
          className="inline object-fit w-6 h-6 rounded-full overflow-hidden"
          onClick={onBotLeftImageClick}
        >
          <img className="h-full w-full object-cover" src={botLeftImage} />
        </div>
        <div className="p-med-90 flex flex-row items-center text-black dark:text-white space-x-8">
          <div className="p-small-90 w-8/12">{botRightText}</div>
          <div>
            <MbIcon name={botRightIcon} size="12px" color="mb-gray-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
