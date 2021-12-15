import { EIconName } from "../../../constants/icons";
import { ESize } from "../../../constants/properties";
import { TInfoCard } from "../../../types/cards.type";
import MbIcon from "../../icon/Icon";
import "./infocard.css";

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

const MbInfoCard = ({ boxInfo }: { boxInfo: TInfoCard }) => {
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

  const getDescriptionFont = () => {
    if (size === "small") {
      return isBigDescription ? "p-big-90" : "p-small-90";
    }
    return isBigDescription ? "p-sub-90" : "p-big-90";
  };

  const getTitleFont = () => {
    if (size === "small") {
      return "cap-big-90";
    }
    return "p-small-90";
  };

  return (
    <div className={`info-card ${size}`}>
      <div
        className={`flex justify-between items-center title-wrapper ${size} relative`}
      >
        <div className={`${getTitleFont()} text-gray-700 dark:text-gray-300`}>
          {title}
        </div>

        {upperIcon !== EIconName.NONE && (
          <div className="absolute right-0 mt-4">
            <MbIcon
              name={upperIcon}
              size="20px"
              color="blue-300"
              darkColor="blue-100"
            ></MbIcon>
          </div>
        )}
      </div>
      <div className="flex space-x-12 items-center">
        {descriptionIcon !== EIconName.NONE && !descriptionImage && (
          <MbIcon
            name={descriptionIcon}
            size="24px"
            color="blue-300"
            darkColor="blue-100"
          ></MbIcon>
        )}
        {descriptionImage && descriptionIcon === EIconName.NONE && (
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img className="h-full object-cover" src={descriptionImage} />
          </div>
        )}

        {description && (
          <div>
            <div
              className={`${getDescriptionFont()} ${
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

export default MbInfoCard;
