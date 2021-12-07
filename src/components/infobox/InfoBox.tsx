import { EIconName } from "../../constants/icons";
import { ESize } from "../../constants/properties";
import { TInfoBox } from "../../types/infobox.type";
import Icon from "../icon/Icon";
import "./infobox.css";

const LoadingInfoBox = ({ size }: { size: ESize }) => {
  return (
    <div className={`info-card ${size}`}>
      <div
        className={`flex justify-between items-center title-wrapper ${size} relative animate-pulse`}
      >
        <div className="h-4 w-16 bg-gray-600 rounded"></div>
      </div>
      <div className="flex space-x-12 items-center animate-pulse">
        <div className="h-6 w-32 rounded bg-gray-600"></div>
      </div>
    </div>
  );
};

const InfoBox = ({ boxInfo }: { boxInfo: TInfoBox }) => {
  const {
    loading = false,
    title,
    description,
    descriptionIcon = EIconName.NONE,
    descriptionImage,
    handleDescriptionClick,
    upperIcon = EIconName.NONE,
    isBigDescription = true,
    size = ESize.MEDIUM,
  } = boxInfo;

  if (loading) return <LoadingInfoBox size={size} />;

  const getDescriptionFont = (size: string, isBigDescription: boolean) => {
    if (size === "small") {
      return isBigDescription ? "big-p" : "small-p";
    }
    return isBigDescription ? "sub-p" : "big-p";
  };

  const getTitleFont = (size: string) => {
    if (size === "small") {
      return "big-cap";
    }
    return "small-p";
  };

  return (
    <div className={`info-card ${size}`}>
      <div
        className={`flex justify-between items-center title-wrapper ${size} relative`}
      >
        <div
          className={`${getTitleFont(size)} text-gray-700 dark:text-gray-300`}
        >
          {title}
        </div>

        {upperIcon !== EIconName.NONE && (
          <div className="absolute right-0 mt-4">
            <Icon
              name={upperIcon}
              size="20px"
              color="blue-300"
              darkColor="blue-100"
            ></Icon>
          </div>
        )}
      </div>
      <div className="flex space-x-12 items-center">
        {descriptionIcon !== EIconName.NONE && !descriptionImage && (
          <Icon
            name={descriptionIcon}
            size="24px"
            color="blue-300"
            darkColor="blue-100"
          ></Icon>
        )}
        {descriptionImage && descriptionIcon === EIconName.NONE && (
          <div className="object-fit w-6 h-6 rounded-full overflow-hidden">
            <img className="h-full object-fit" src={descriptionImage} />
          </div>
        )}

        {description && (
          <div>
            <div
              className={`${getDescriptionFont(size, isBigDescription)} ${
                handleDescriptionClick
                  ? "text-blue-300 dark:text-blue-100 cursor-pointer"
                  : "text-black dark:text-white"
              } inline-flex align-middle`}
              onClick={handleDescriptionClick}
            >
              {description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
