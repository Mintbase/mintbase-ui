import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as FullHeartIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import "./nftcard.css";
import { TNftCard } from "../../types/nftcard.type";

const BASE_CARD = `dark:bg-gray-850 bg-white rounded p-12 dark:hover:bg-gray-800 hover:bg-gray-50 cursor-pointer inline-block`;

type CardProps = React.ComponentProps<"div"> & {
  loading?: boolean;
  nftInfo: TNftCard;
  handleLike: Event;
};

const LoadingCard = () => {
  return (
    <div className={`${BASE_CARD}`}>
      <div className="flex flex-row justify-between text-gray-200 mb-12 animate-pulse">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-col justify-center items-center animate-pulse card-image">
        <div className="h-full w-full  rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between text-gray-200 mt-12 animate-pulse">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-row justify-between text-gray-200 mt-12 animate-pulse">
        <div className="inline object-cover w-5 h-5 rounded-full bg-gray-600"></div>
        <div className="med-p flex flex-row items-center">
          <div className="h-6 w-12 rounded bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

const NftCard = ({ loading = false, nftInfo, handleLike }: CardProps) => {
  const {
    title,
    liked,
    ownerImg,
    ownerId,
    nftImg,
    likeAmount,
    availableEditions,
    price,
    thingId,
    totalEditions,
  } = nftInfo;
  if (loading) return <LoadingCard />;
  return (
    <div className={`${BASE_CARD} ${loading && `animate-pulse`}`}>
      <div className="flex flex-row justify-between items-center text-black dark:text-white mb-12">
        <div className="flex space-x-8 items-center heart">
          {liked ? (
            <FullHeartIcon
              className="h-4 w-4 full"
              onClick={() => handleLike}
            />
          ) : (
            <HeartIcon className="h-4 w-4" onClick={() => handleLike} />
          )}
          <p
            className="small-p text-gray-700 dark:text-gray-300"
            style={{ marginTop: "4px" }}
          >
            {likeAmount}
          </p>
        </div>
        <DotsHorizontalIcon className="h-4 w-4" />
      </div>
      <div
        className="flex flex-col justify-center items-center card-image"
        onClick={() =>
          (window.location.href = `https://www.mintbase.io/thing/${thingId}`)
        }
      >
        <div className="h-full w-full rounded bg-mb-red object-fit">
          <img className="h-full rounded" src={nftImg} />
        </div>
      </div>
      <div className="flex flex-row justify-between text-black dark:text-white mt-12">
        <div className="big-p">{title}</div>
        <div className="big-p">{price}</div>
      </div>
      <div className="flex flex-row justify-between text-gray-200 mt-12">
        <div
          className="inline object-fit w-5 h-5 rounded-full bg-mb-red"
          onClick={() =>
            (window.location.href = `https://www.mintbase.io/human/${ownerId}`)
          }
        >
          <img className="h-full rounded-full" src={ownerImg} />
        </div>
        <div className="med-p flex flex-row items-center text-black dark:text-white space-x-8">
          <div className="med-p">
            {availableEditions}/{totalEditions}
          </div>
          <div>
            <DocumentDuplicateIcon
              className={`h-5 w-5  ${
                availableEditions < totalEditions
                  ? "text-mb-red"
                  : "text-gray-500"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
