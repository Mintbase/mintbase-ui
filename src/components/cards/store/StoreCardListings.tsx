import { MbText } from '../../text/Text'
import { MbInfoCard } from '../info/InfoCard'

export const MbStoreCardListings = () => {
  return (
    <div className="rounded bg-white dark:bg-gray-850 p-12 md:p-24 w-min">
      <div className="flex flex-col gap-24">
        <div className="flex gap-24 items-center">
          <div className="w-24 h-24 border-2 border-black rounded"></div>
          <MbText className="h3-130 dark:text-white">Store Name</MbText>
        </div>
        <div className="flex gap-12">
          <div className="flex-1">
            <MbInfoCard
              boxInfo={{ title: 'Total Minted', description: '3442' }}
            />
          </div>
          <div className="flex-1">
            <MbInfoCard boxInfo={{ title: 'Owners', description: '312' }} />
          </div>
        </div>
        <div>
          <MbText className="p-small-90 text-gray-700 dark:text-gray-300">
            Latest Listings
          </MbText>
          <div className='flex gap-12 mt-8'>
            <div className="w-32 h-32 border-2 border-black rounded"></div>
            <div className="w-32 h-32 border-2 border-black rounded"></div>
            <div className="w-32 h-32 border-2 border-black rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
