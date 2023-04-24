import React from 'react'
import { MbIcon } from '../../icon/Icon'
import { TThingCard } from '../../../types/cards.type'
import { EIconName } from '../../../consts/icons'
import './metacard.css'
import './../cards.css'


interface CardProps extends React.ComponentProps<'div'> {
  loading?: boolean
  cardInfo: TThingCard
}


const LoadingCard = () => {
  return (
    <div className="base-card thing">

      <div className="flex flex-col justify-center items-center animate-pulse loading-card-image">
        <div className="h-full w-full rounded bg-gray-600"></div>
      </div>
      <div className='p-12'>
      <div className="flex flex-row justify-between mt-12 animate-pulse">
      <div className="h-4 w-1/4 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between mt-12 animate-pulse">
        <div className="h-4 w-2/4 rounded bg-gray-600"></div>
        <div className="h-4 w-8 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between mt-12 animate-pulse">
        <div className=" w-6 h-6 rounded-full bg-gray-600"></div>
        <div className="flex flex-row items-center">
          <div className="h-4 w-8 rounded bg-gray-600"></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export const MbMetaCard = ({ loading = false, cardInfo }: CardProps) => {
 if (loading) return <LoadingCard />
  const {
    centerElement,
    nftTypeIcon,
    extraMidLeftElement,
    midLeftText,
    midRightText,
    botLeftImage,
    botRightText,
    onBotLeftImageClick,
    onCenterElementClick,
  } = cardInfo

  return (
    <div className="base-card thing">

      <div className="flex flex-col cover justify-center items-center metaCardImage">
        <div
          className="h-full w-full rounded-t-md overflow-hidden relative pt-56 sm:pt-72 lg:pt-68"
          onClick={onCenterElementClick}
        >
          {nftTypeIcon && (
            <div className="w-5 h-5 bg-black rounded-full absolute top-3 left-3 z-10 flex items-center justify-center">
              <MbIcon name={nftTypeIcon} size="14px" color="white" />
            </div>
          )}

          <div className="absolute inset-0">{centerElement}</div>
        </div>
      </div>
      <div className='px-12 pb-12'>
        <div className="cap-big-90 md:p-med-90 text-gray-700 dark:text-gray-300 mt-12 w-5/6 extraMidLeftEl">
          {extraMidLeftElement}
        </div>
        <div className="flex flex-row justify-between text-black dark:text-white mt-8">
          <div className="p-small-90 md:p-big-90 w-52 truncate">{midLeftText}</div>
          <div className="p-small-90  md:p-big-90 text-right break-all flex gap-1 ">{midRightText.slice(0, -1)} {midRightText.endsWith('N') ? <img src="/icons/near.svg" width="12" height="12" className="svgImage nearIcon" /> : null}</div>
        </div>
        <div className="flex flex-row justify-between text-gray-200 mt-12">
          {botLeftImage ? (
            <div
              className="inline object-fit w-6 h-6 rounded-full overflow-hidden"
              onClick={onBotLeftImageClick}
            >
              {botLeftImage}
            </div>
          ) : (
            <div></div>
          )}
          <div className="p-med-90 flex flex-row items-center text-black dark:text-white space-x-8">
            <div className="cap-big-90 md:p-small-90">{botRightText}</div>
          </div>
        </div>
      </div>
    </div>
  )
}