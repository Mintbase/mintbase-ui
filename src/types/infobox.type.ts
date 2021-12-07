import { EIconName } from "../constants/icons";
import { ESize } from "../constants/properties";

export type TInfoBox = {
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
