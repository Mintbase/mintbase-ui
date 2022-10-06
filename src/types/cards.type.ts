import { EIconName } from '../consts/icons'
import { ESize } from '../consts/properties'

export type TThingCard = {
  upperLeftIcon?: EIconName
  upperLeftText?: string
  upperRightElement?: JSX.Element
  centerElement: JSX.Element
  nftTypeIcon?: EIconName
  extraMidLeftElement?: JSX.Element
  midLeftText: string
  midRightText: string
  botLeftImage?: string
  botRightText?: string
  botRightIcon?: EIconName
  onUpperLeftClick?: (e?:React.MouseEvent<HTMLElement>) => void
  onCenterElementClick?: (e?:React.MouseEvent<HTMLElement>) => void
  onBotLeftImageClick?: (e?:React.MouseEvent<HTMLElement>) => void
}

export type TSmallCard = {
  centerElement: JSX.Element
  title: string
  subtitle?: string
  onCardClick?: (e?:React.MouseEvent<HTMLElement>) => void
}

export type TInfoCard = {
  loading?: boolean
  title: string
  titleIcon?: JSX.Element
  description?: string
  upperIcon?: JSX.Element
  descriptionIcon?: EIconName
  descriptionImage?: string
  lowerLeftText?: string
  isBigDescription?: boolean
  isNumber?: boolean
  size?: ESize
  isLink?: boolean
  handleDescriptionClick?: (e?:React.MouseEvent<HTMLElement>) => void
}
