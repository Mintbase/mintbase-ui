import { DocumentDuplicateIcon, HeartIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import React from "react";
import { TThingCard } from "../../../types/cards.type";
import "./thingcard.css";
import "./../cards.css";
import Icon from "../../icon/Icon";
import { EIconName } from "../../../constants/icons";
interface CardProps extends React.ComponentProps<"div"> {
  loading?: boolean;
  cardInfo: TThingCard;
}

const LoadingCard = () => {
  return (
    <div className="base-card p-12">
      <div className="flex flex-row justify-between mb-12 animate-pulse">
        <div className="h-4 w-8 rounded bg-gray-600"></div>
        <div className="h-4 w-8 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-col justify-center items-center animate-pulse thing-card-image ">
        <div className="h-full w-full rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between mt-12 animate-pulse">
        <div className="h-4 w-8 rounded bg-gray-600"></div>
        <div className="h-4 w-8 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between mt-12 animate-pulse">
        <div className=" w-6 h-6 rounded-full bg-gray-600"></div>
        <div className="flex flex-row items-center">
          <div className="h-4 w-8 rounded bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

const ThingCard = ({ loading = false, cardInfo }: CardProps) => {
  if (loading) return <LoadingCard />;
  const {
    upperLeftIcon,
    upperLeftText,
    upperRightIcon,
    centerElement,
    midLeftText,
    midRightText,
    botLeftImage,
    botRightIcon = EIconName.EDITIONS,
    botRightText,
    onBotLeftImageClick,
    onCenterElementClick,
    onUpperLeftClick,
    onUpperRightClick,
  } = cardInfo;
  return (
    <div className="base-card thing p-12">
      <div className="flex flex-row justify-between items-center text-black dark:text-white mb-12">
        <div className="flex space-x-8 items-center">
          <div className="w-4 h-4" onClick={onUpperLeftClick}>
            {/* TO DO: Change when we have icons in storybook */}
            {/* {upperLeftIcon} */}
            <HeartIcon />
          </div>
          <p
            className="small-p text-gray-700 dark:text-gray-300"
            style={{ marginTop: "4px" }}
          >
            {upperLeftText}
          </p>
        </div>
        <div className="w-4 h-4" onClick={onUpperRightClick}>
          {/* TO DO: Change when we have icons in storybook */}
          {/* {upperRightIcon} */}
          <DotsHorizontalIcon />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center thing-card-image ">
        <div
          className="h-full w-full rounded overflow-hidden object-fit"
          onClick={onCenterElementClick}
        >
          {centerElement}
        </div>
      </div>
      <div className="flex flex-row justify-between text-black dark:text-white mt-12">
        <div className="big-p w-10/12">{midLeftText}</div>
        <div className="big-p">{midRightText}</div>
      </div>
      <div className="flex flex-row justify-between text-gray-200 mt-12">
        <div
          className="inline object-fit w-6 h-6 rounded-full overflow-hidden"
          onClick={onBotLeftImageClick}
        >
          <img className="h-full" src={botLeftImage} />
        </div>
        <div className="med-p flex flex-row items-center text-black dark:text-white space-x-8">
          <div className="small-p w-8/12">{botRightText}</div>
          <div>
            <Icon name={botRightIcon} size="12px" color="mb-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingCard;
