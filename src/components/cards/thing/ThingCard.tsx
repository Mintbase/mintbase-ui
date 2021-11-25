import { DocumentDuplicateIcon, HeartIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import React from "react";
import { TThingCard } from "../../../types/thingcard";
import "./thingcard.css";

const BASE_CARD = `dark:bg-gray-850 bg-white rounded p-12 dark:hover:bg-gray-800 hover:bg-gray-50 cursor-pointer inline-block`;

type CardProps = React.ComponentProps<"div"> & {
  loading?: boolean;
  cardInfo: TThingCard;
};

const LoadingCard = () => {
  return (
    <div className={`${BASE_CARD}`}>
      <div className="flex flex-row justify-between mb-12 animate-pulse">
        <div className="h-4 w-8 rounded bg-gray-600"></div>
        <div className="h-4 w-8 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-col justify-center items-center animate-pulse card-image">
        <div className="h-full w-full rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between mt-12 animate-pulse">
        <div className="h-4 w-8 rounded bg-gray-600"></div>
        <div className="h-4 w-8 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between mt-12 animate-pulse">
        <div className=" w-5 h-5 rounded-full bg-gray-600"></div>
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
    centerImage,
    midLeftText,
    midRightText,
    botLeftImage,
    botRightIcon,
    botRightText,
    onBotLeftImageClick,
    onCenterImageClick,
    onUpperLeftClick,
    onUpperRightClick,
  } = cardInfo;
  return (
    <div className={`${BASE_CARD}`}>
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
      <div className="flex flex-col justify-center items-center card-image">
        <div
          className="h-full w-full rounded object-fit"
          onClick={onCenterImageClick}
        >
          <img className="h-full rounded" src={centerImage} />
        </div>
      </div>
      <div className="flex flex-row justify-between text-black dark:text-white mt-12">
        <div className="big-p">{midLeftText}</div>
        <div className="big-p">{midRightText}</div>
      </div>
      <div className="flex flex-row justify-between text-gray-200 mt-12">
        <div
          className="inline object-fit w-5 h-5 rounded-full"
          onClick={onBotLeftImageClick}
        >
          <img className="h-full rounded-full" src={botLeftImage} />
        </div>
        <div className="med-p flex flex-row items-center text-black dark:text-white space-x-8">
          <div className="med-p">{botRightText}</div>
          <div className="w-5 h-5">
            {/* TO DO: Change when we have icons in storybook */}
            {/* {botRightIcon} */}

            <DocumentDuplicateIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingCard;