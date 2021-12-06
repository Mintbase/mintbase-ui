import { EIconName } from "../../constants/icons";
import Icon from "../icon/Icon";
import "./infobox.css";

const InfoBox = ({
  title,
  description,
  upperIcon = EIconName.NONE,
  bigDescription = true,
  handleDescriptionClick,
}: {
  title: string;
  description?: string;
  upperIcon?: EIconName;
  bigDescription: boolean;
  handleDescriptionClick?: () => void;
}) => {
  return (
    <div className="info-card">
      <div className="flex justify-between items-center pb-12 relative">
        <div className="small-p text-gray-700 dark:text-gray-300">{title}</div>

        {upperIcon && upperIcon !== EIconName.NONE && (
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
      {description && (
        <div
          className={`${bigDescription ? "sub-p" : "med-p"} ${
            handleDescriptionClick
              ? "text-blue-300 dark:text-blue-100 cursor-pointer"
              : "text-black dark:text-white"
          }`}
          onClick={handleDescriptionClick}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default InfoBox;
