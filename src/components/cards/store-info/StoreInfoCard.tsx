import React from 'react'

interface StoreInfoCardProps {
  loading?: boolean
  imageElement: JSX.Element
  storeName: JSX.Element | string
  storeStats: { label: string; value: number }[]
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

export const MbStoreInfoCard = (props: StoreInfoCardProps) => {
  const { imageElement, storeStats, loading, storeName } = props

  if (loading)
    return <LoadingCard cardType={cardType} isBigStoreCard={isBigStoreCard} />

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
        <div className="p-big-90 truncate w-5/6 m-auto">{title}</div>
      </div>
      {subtitle && (
        <div className="p-small-90 text-gray-700 dark:text-gray-300 truncate px-24 mt-4 text-center">
          {subtitle}
        </div>
      )}
    </div>
  )
}
