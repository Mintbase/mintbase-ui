import { EIconName } from "../constants/icons";

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
