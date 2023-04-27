import React from 'react'
import { MbIcon } from '../../icon/Icon'
import { EIconName } from '../../../consts/icons'
import './metacard.css'
import './../cards.css'

interface MetaCardHeaderProps {
    onMetaCardImageClick: () => void
    nftTypeIcon?: EIconName;
    metaCardImage: JSX.Element
}

interface MetaCardInfoProps {
    storeNameElement: JSX.Element,
    nftTitle: string,
    minterImage: JSX.Element,
    tokenListings: string,
    price: string,
    onMinterImageClick: (e: any) => any
}
interface MetaCardProps extends React.ComponentProps<'li'> {
  loading?: boolean
  metaCardHeaderData: MetaCardHeaderProps
  metaCardInfo: MetaCardInfoProps
}


const LoadingCard = () => {
  return (
    <li className="base-card thing">
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
    </li>
  )
}

const MbMetaCardHeader = ({ data }: {data: MetaCardHeaderProps}) => {
  const {
    metaCardImage,
    nftTypeIcon,
    onMetaCardImageClick,
  } = data

  return (
    <header className="flex flex-col cover justify-center items-center metaCardImage">
      <div
        className="h-full w-full rounded-t-md overflow-hidden relative pt-56 sm:pt-72 lg:pt-68"
        onClick={onMetaCardImageClick}
      >
        {nftTypeIcon ? (
          <div className="w-5 h-5 bg-black rounded-full absolute top-3 left-3 z-10 flex items-center justify-center">
            <MbIcon name={nftTypeIcon} size="14px" color="white" />
          </div>
        ) : null}
        <div className="absolute inset-0">{metaCardImage}</div>
      </div>
    </header>
  )
}

const MbMetaCardInfo = ({ data }: {data: MetaCardInfoProps}):JSX.Element => {
  const {
    storeNameElement,
    nftTitle,
    minterImage,
    tokenListings,
    price,
    onMinterImageClick } = data

  return (
    <footer className='px-12 pb-12'>
      <div className="p-small-90  text-gray-700 dark:text-gray-300 mt-12 w-5/6  extraMidLeftEl">
        {storeNameElement}
      </div>
      <div className="flex flex-row justify-between text-black dark:text-white mt-8">
        <div className="p-med-90 w-3/4 truncate ">{nftTitle}</div>
        <div className="p-med-130 text-right break-all flex gap-1 ">{price.slice(0, -1)} {price.endsWith('N') ? <img src="/icons/near.svg" width="12" height="12" className="svgImage nearIcon" /> : '-'}</div>
      </div>
      <div className="flex flex-row justify-between text-gray-200 mt-12">
        {minterImage ? (
          <div
            className="inline object-fit w-6 h-6 rounded-full overflow-hidden"
            onClick={onMinterImageClick}
          >
            {minterImage}
          </div>
        ) : (
          <div></div>
        )}
        <div className=" flex flex-row items-center text-black dark:text-white space-x-8">
          <div className="p-small-90 metaCardScale">{tokenListings}</div>
        </div>
      </div>
    </footer>
  )
}

export const MbMetaCard = ({ loading = false, metaCardInfo, metaCardHeaderData }: MetaCardProps): JSX.Element => {
  if (loading) return <LoadingCard />

  return (
    <>
      <MbMetaCardHeader data={metaCardHeaderData} />
      <MbMetaCardInfo data={metaCardInfo} />
    </>
  )
}