import React from "react";
import "./profilecard.css";

const BASE_CARD = `dark:bg-gray-850 bg-white rounded py-12 px-64 dark:hover:bg-gray-800 hover:bg-gray-50 cursor-pointer inline-block`;

interface CardProps extends React.ComponentProps<"div"> {
  loading?: boolean;
  centerElement: JSX.Element;
  title: string;
  onCardClick: () => void;
}

const LoadingCard = () => {
  return (
    <div className={`${BASE_CARD}`}>
      <div className="flex flex-col justify-center items-center animate-pulse profile-card-image">
        <div className="h-full w-full rounded bg-gray-600"></div>
      </div>
      <div className="flex justify-center mt-12 animate-pulse">
        <div className="h-6 w-24 rounded bg-gray-600"></div>
      </div>
    </div>
  );
};

const ProfileCard = ({
  loading = false,
  centerElement,
  title,
  onCardClick,
}: CardProps) => {
  if (loading) return <LoadingCard />;

  return (
    <div className={`${BASE_CARD}`} onClick={onCardClick}>
      <div className="flex flex-col m-auto items-center profile-card-image">
        {centerElement}
      </div>
      <div className="text-center text-black dark:text-white mt-12">
        <div className="big-p">{title}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
