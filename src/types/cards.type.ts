import { EIconName } from '../consts/icons'
import { ESize } from '../consts/properties'

export type TThingCard = {
  upperLeftIcon?: EIconName
  upperLeftText?: string
  upperRightElement?: JSX.Element
  centerElement: JSX.Element
  isCenterImage: boolean
  midLeftText: string
  midRightText: string
  botLeftImage?: string
  botRightText?: string
  botRightIcon?: EIconName
  onUpperLeftClick?: () => void
  onCenterElementClick?: () => void
  onBotLeftImageClick?: () => void
}

export type TSmallCard = {
  centerElement: JSX.Element
  title: string
  onCardClick?: () => void
}

export type TInfoCard = {
  loading?: boolean
  title: string
  description?: string
  upperIcon?: EIconName
  descriptionIcon?: EIconName
  descriptionImage?: string
  lowerLeftText?: string
  isBigDescription?: boolean
  isNumber?: boolean
  size?: ESize
  handleDescriptionClick?: () => void
}
