import React from 'react'
import './smallcard.css'
import './../cards.css'
import { TSmallCard } from '../../../types/cards.type'
import { ESize, ESmallCardType } from '../../../consts/properties'

interface CardProps extends React.ComponentProps<'div'> {
  loading?: boolean
  card: TSmallCard
  cardType: ESmallCardType
  isBigStoreCard?: boolean
}

const LoadingCard = ({
  cardType,
  isBigStoreCard,
}: {
  cardType: string
  isBigStoreCard: boolean
}) => {
  return (
    <div className={`base-card ${cardType}`}>
      <div
        className={`flex flex-col justify-center items-center animate-pulse card-wrapper ${
          isBigStoreCard ? 'big-store' : ''
        }`}
      >
        <div className="h-full w-full rounded bg-gray-600"></div>
      </div>
      <div className="flex justify-center mt-12 animate-pulse">
        <div className="h-6 w-24 rounded bg-gray-600"></div>
      </div>
    </div>
  )
}

export const MbSmallCard = ({
  loading = false,
  cardType = ESmallCardType.STORE,
  card,
  isBigStoreCard = false,
}: CardProps) => {
  if (loading)
    return <LoadingCard cardType={cardType} isBigStoreCard={isBigStoreCard} />
  const { title, centerElement, onCardClick } = card

  return (
    <div className={`base-card small ${cardType}`} onClick={onCardClick}>
      <div
        className={`flex flex-col justify-center items-center card-wrapper ${
          isBigStoreCard ? 'big-store' : ''
        }`}
      >
        {centerElement}
      </div>
      <div className="text-center text-black dark:text-white mt-12">
        <div className="p-big-90">{title}</div>
      </div>
    </div>
  )
}
