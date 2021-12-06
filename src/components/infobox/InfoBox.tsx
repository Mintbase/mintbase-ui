import { EIconName } from "../../constants/icons";
import Icon from "../icon/Icon";
import "./infobox.css";

const InfoBox = ({
  title,
  description,
  upperIcon = EIconName.NONE,
  bigDescription = true,
  descriptionIcon = EIconName.NONE,
  descriptionImage,
  handleDescriptionClick,
}: {
  title: string;
  description?: string;
  upperIcon?: EIconName;
  descriptionIcon?: EIconName;
  descriptionImage?: string;
  bigDescription?: boolean;
  handleDescriptionClick?: () => void;
}) => {
  return (
    <div className="info-card">
      <div className="flex justify-between items-center pb-12 relative">
        <div className="small-p text-gray-700 dark:text-gray-300">{title}</div>

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
              className={`${bigDescription ? "sub-p" : "med-p"} ${
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
