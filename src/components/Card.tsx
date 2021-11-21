import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";

const BASE_CARD = `bg-mb-blackblue dark:bg-white rounded p-12 mt-4 h-1/5 w-1/5 max-w-md mx-auto`;

type CardProps = React.ComponentProps<"div"> & {
  loading?: boolean;
  title?: string;
};

const LoadingCard = () => {
  return (
    <div className={`${BASE_CARD}`}>
      <div className="flex flex-row justify-between text-gray-200 mb-12 animate-pulse">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </div>
      <div className="flex flex-col justify-center items-center animate-pulse">
        <div className="h-48 w-full rounded bg-gray-600"></div>
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

const Card = ({ loading = false, title = "" }: CardProps) => {
  if (loading) return <LoadingCard />;
  return (
    <div className={`${BASE_CARD} ${loading && `animate-pulse`}`}>
      <div className="flex flex-row justify-between text-gray-200 mb-12">
        <HeartIcon className="h-5 w-5" />
        <DotsHorizontalIcon className="h-5 w-5" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="h-48 w-full rounded bg-mb-red"></div>
      </div>
      <div className="flex flex-row justify-between text-gray-200 mt-12">
        <div className="big-p">{title}</div>
        <div className="big-p">1 N</div>
      </div>
      <div className="flex flex-row justify-between text-gray-200 mt-12">
        <div className="inline object-cover w-5 h-5 rounded-full bg-mb-red"></div>

        <div className="med-p flex flex-row items-center">
          <div className="align-middle">1/1</div>
          <div>
            <DocumentDuplicateIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
