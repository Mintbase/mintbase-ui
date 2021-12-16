import { useEffect, useState } from "react";
import { EIconName } from "../../constants/icons";
import MbIcon from "../icon/Icon";
import "./pagination.css";

interface PaginationProps {
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

const MbPagination = (props: PaginationProps) => {
  const [pages, setPages] = useState<number[]>([]);
  const [current, setCurrent] = useState<number>(1);

  useEffect(() => {
    setPages([...Array(props.totalPages).keys()].map((i) => i + 1));
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-center">
        <div className="cursor-pointer flex items-center">
          <MbIcon
            size="24px"
            name={EIconName.ARROW_LEFT_SMALL}
            color={`${current === 1 ? "gray-400" : "blue-300"}`}
            darkColor={`${current === 1 ? "gray-400" : "blue-100"}`}
          />
        </div>

        {pages.length && (
          <ul className="px-24 flex justify-center items-center space-x-12 text-blue-300 dark:text-blue-100">
            {pages.map((page) => (
              <li
                className={`page-number p-med-90 ${
                  current === page ? "active" : ""
                }`}
                onClick={() => setCurrent(page)}
              >
                {page}
              </li>
            ))}
          </ul>
        )}
        <div className="cursor-pointer flex items-center">
          <MbIcon
            size="24px"
            name={EIconName.ARROW_RIGHT_SMALL}
            color={`${current === props.totalPages ? "gray-400" : "blue-300"}`}
            darkColor={`${
              current === props.totalPages ? "gray-400" : "blue-100"
            }`}
          />
        </div>
      </div>
      <div className="text-center pt-24 p-small-90 text-gray-700 dark:text-gray-300">
        Showing {props.itemsPerPage} of {props.totalItems} NFTs
      </div>
    </div>
  );
};

export default MbPagination;
