import React from "react";
import { MbText } from "../text/Text";
import "./dropdownmenu.css";

interface Item {
  text: string;
  icon?: JSX.Element;
  onClick: () => void;
}

// TODO: fix className type
export const MbDropdownMenu = ({
  items,
  isOpen,
  className,
}: {
  items: Item[];
  isOpen: boolean;
  className?: string;
}) => {
  return !isOpen ? null : (
    <div
      className={`bg-gray-50 dark:bg-gray-800 text-mb-blackblue dark:text-white shadow-md rounded-md w-64 mt-4 overflow-hidden ${className}`}
    >
      {items.map(({ text, icon, onClick }, index) => {
        // TODO: fix over rounded corners for the first and last element
        return (
          <div
            key={`${text}-${index}`}
            className={
              "flex hover:bg-blue-300-15 dark:hover:bg-blue-100-35 p-8 cursor-pointer relative"
            }
            onClick={onClick}
          >
            <MbText
              className={
                "w-full justify-center flex p-med-90 text-blue-300 dark:text-blue-100"
              }
            >
              {text}
            </MbText>
            {icon && <div className={"dropdown-icon"}>{icon}</div>}
          </div>
        );
      })}
    </div>
  );
};
