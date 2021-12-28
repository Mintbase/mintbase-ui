import React from 'react'
import "./itemsperpage.css";

export const MbItemsPerPage = ({
  onItemsPage,
  currentValue,
}: {
  onItemsPage: (page: number) => void;
  currentValue: number;
}) => {
  const options = [10, 20, 30, 40, 50];
  return (
    <ul className="flex items-center space-x-8 md:space-x-12">
      <li className="p-med-90 dark:text-white">Items per page</li>
      {options.map((option) => (
        <li
          className={`item p-med-90 ${currentValue === option ? "active" : ""}`}
          onClick={() => onItemsPage(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};
