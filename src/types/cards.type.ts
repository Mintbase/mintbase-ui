export type TThingCard = {
  upperLeftIcon?: string; // TO DO ICON: change when we have our icons in storybook
  upperLeftText?: string;
  upperRightIcon?: string; // TO DO ICON: change when we have our icons in storybook
  centerElement: JSX.Element;
  midLeftText: string;
  midRightText: string;
  botLeftImage?: string;
  botRightText?: string;
  botRightIcon?: string; // TO DO ICON: change when we have our icons in storybook
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
