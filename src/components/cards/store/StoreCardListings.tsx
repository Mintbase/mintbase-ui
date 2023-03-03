import { StoreCardListingsProps } from '../../../types'
import { MbText } from '../../text/Text'
import { MbInfoCard } from '../info/InfoCard'

export const MbStoreCardListings = (props: StoreCardListingsProps) => {
  const {
    storeName,
    storeImage,
    storeUrl,
    totalMinted,
    owners,
    latestListings,
    loading,
  } = props

  return (
    <div className="rounded bg-white dark:bg-gray-850 p-12 md:p-24 w-max">
      <div className="flex flex-col gap-24">
        <div className="flex gap-24 items-center">
          <div className="w-24 h-24 rounded cursor-pointer">
            {loading ? (
              <div className="rounded animate-pulse w-full h-full bg-gray-600"></div>
            ) : (
              <a href={storeUrl}>
                <img className="h-full w-full object-cover" src={storeImage} />
              </a>
            )}
          </div>
          {loading ? (
            <div className="animate-pulse w-32 h-6 bg-gray-600 rounded"></div>
          ) : (
            <a href={storeUrl}>
              <MbText className="h3-130 dark:text-white cursor-pointer">
                {storeName}
              </MbText>
            </a>
          )}
        </div>
        <div className="flex gap-12">
          <div className="flex-1">
            <MbInfoCard
              boxInfo={{
                title: 'Total Minted',
                description: totalMinted,
                loading: loading,
              }}
            />
          </div>
          <div className="flex-1">
            <MbInfoCard
              boxInfo={{
                title: 'Owners',
                description: owners,
                loading: loading,
              }}
            />
          </div>
        </div>
        <div>
          <MbText className="p-small-90 text-gray-700 dark:text-gray-300">
            Latest Listings
          </MbText>
          <div className="flex gap-12 mt-8">
            {loading ? (
              <>
                <div className="animate-pulse w-32 h-32 bg-gray-600 rounded"></div>
                <div className="animate-pulse w-32 h-32 bg-gray-600 rounded"></div>
                <div className="animate-pulse w-32 h-32 bg-gray-600 rounded"></div>
              </>
            ) : latestListings ? (
              latestListings.map((nft, index) => (
                <a href={nft.url}>
                  <div
                    className="w-32 h-32 rounded relative cursor-pointer"
                    key={`${nft.id}-${index}`}
                  >
                    <img
                      className="h-full w-full object-cover"
                      alt={nft.id}
                      src={nft.image}
                    />
                    <div className="absolute w-full bottom-2">
                      <div className="p-4 text-white rounded bg-black w-max m-auto">
                        <MbText className="p-med-130">{nft.price}</MbText>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
