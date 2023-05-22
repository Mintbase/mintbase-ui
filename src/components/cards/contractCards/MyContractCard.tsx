import { EIconName } from '../../../consts/icons'
import { ESize } from '../../../consts/properties'
import { MbIcon } from '../../icon/Icon'
import { MbText } from '../../text/Text'
import { MbButton } from '../../buttons/button/Button'
import { EType } from '../../../consts/properties'
import { EState } from '../../../consts/properties'
import { MbAction } from '../../action/Action'
import { UrlObject } from 'url'

export interface MyContractCardProps {
  storeId: string
  isMinter: boolean
  shouldSeeSettings: boolean
  contractNftsUrl: string | UrlObject
  contractSettingsUrl: string | UrlObject
  isVerified: boolean
  hasStores: boolean
  profileImage: string
  bgImage: string
  storeName: string
  Image: React.ElementType
  Link: React.ElementType
  tooltip?: JSX.Element
}

const MbMyContractCardHeader = ({
  storeCardHeaderBg,
  Image,
}: {
  storeCardHeaderBg: string
  Image: React.ElementType
}): JSX.Element => {
  return (
    <div className="flex flex-col cover justify-center items-center metaCardImage">
      <div className="w-full rounded-t-md overflow-hidden relative">
        <div className="w-full flex my-contract-Bg-Img relative">
          <Image src={storeCardHeaderBg} />
        </div>
      </div>
    </div>
  )
}

const MbMyContractHeaderProfilePic = ({
  profilePic,
  Image,
}: {
  profilePic: string
  Image: React.ElementType
}): JSX.Element => {
  return (
    <div className="mx-24 md:mx-64">
      <div className="absolute my-contract-profile-pic">
        <Image src={profilePic} />
      </div>
    </div>
  )
}

const MyContractCard = (props: MyContractCardProps) => {
  const {
    storeId,
    isMinter,
    shouldSeeSettings,
    contractNftsUrl,
    contractSettingsUrl,
    isVerified,
    hasStores,
    profileImage,
    bgImage,
    storeName,
    Image,
    Link,
    tooltip,
  } = props

  return (
    <div className="rounded bg-white dark:bg-gray-850 store-listings-card">
      <div className="flex flex-col gap-4 lg:gap-12">
        <Link href={contractNftsUrl}>
          <a className="base-card bg-white dark:bg-gray-850 rounded dark:hover:bg-gray-800 hover:bg-gray-50 cursor-pointer inline-block transition-all duration-500 w-full">
            <MbMyContractCardHeader storeCardHeaderBg={bgImage} Image={Image} />
            <div className="flex items-center gap-10 lg:gap-9">
              <MbMyContractHeaderProfilePic
                profilePic={profileImage}
                Image={Image}
              />

              <div className="col-span-3 inline-flex items-center gap-8 mt-8 lg:mt-12">
                <div>
                  <div className="flex">
                    <MbText className="h3-130 dark:text-white cursor-pointer break-all w-full">
                      {storeName}
                    </MbText>

                    {isVerified && <div className="mb-0.5">{tooltip}</div>}
                  </div>
                  <div>
                    <MbText className="p-small-90 text-gray-300 dark:text-gray-300 mt-2.5 lg:mt-3">
                      Role: {isMinter ? 'Minter' : 'Owner'}
                    </MbText>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between m-10 lg:mx-24 lg:mb-24 lg:mt-12 items-center">
              <div className="flex flex -ml-3 gap-1">
                <Link href={contractNftsUrl} passHref>
                  <a>
                    <MbAction
                      state={!hasStores ? EState.DISABLED : EState.ACTIVE}
                    >
                      Manage NFTs
                    </MbAction>
                  </a>
                </Link>

                {shouldSeeSettings ? (
                  <Link href={contractSettingsUrl} passHref>
                    <a>
                      <MbAction state={EState.ACTIVE}>Settings</MbAction>
                    </a>
                  </Link>
                ) : null}
              </div>
              <div>
                {hasStores ? (
                  <Link href={`/contract/${storeId}/mint`} passHref>
                    <a title="Mint NFT">
                      <MbButton
                        btnType={EType.PRIMARY}
                        label="Mint NFT"
                        size={ESize.MEDIUM}
                        state={EState.ACTIVE}
                      />
                    </a>
                  </Link>
                ) : (
                  <MbButton
                    btnType={EType.PRIMARY}
                    label="Mint NFT"
                    size={ESize.MEDIUM}
                    state={EState.DISABLED}
                  />
                )}
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MyContractCard
