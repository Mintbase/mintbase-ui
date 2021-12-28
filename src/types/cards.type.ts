import { EIconName, ESize } from "consts";

export type TThingCard = {
  upperLeftIcon?: EIconName;
  upperLeftText?: string;
  upperRightIcon?: EIconName;
  centerElement: JSX.Element;
  isCenterImage: boolean;
  midLeftText: string;
  midRightText: string;
  botLeftImage?: string;
  botRightText?: string;
  botRightIcon?: EIconName;
  onUpperLeftClick?: () => void;
  onUpperRightClick?: () => void;
  onCenterElementClick?: () => void;
  onBotLeftImageClick?: () => void;
};

export type TSmallCard = {
  centerElement: JSX.Element;
  title: string;
  onCardClick?: () => void;
};

export type TInfoCard = {
  loading?: boolean;
  title: string;
  description?: string;
  upperIcon?: EIconName;
  descriptionIcon?: EIconName;
  descriptionImage?: string;
  isBigDescription?: boolean;
  size?: ESize;
  handleDescriptionClick?: () => void;
};
