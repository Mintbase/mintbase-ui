import { useEffect, useState } from "react";
import { EIconName } from "../../constants/icons";
import MbIcon from "../icon/Icon";

interface PaginationProps {
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

const MbPagination = (props: PaginationProps) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    setPages([...Array(props.totalPages).keys()].map((i) => i + 1));
  }, []);
  return (
    <>
      <div className="flex items-center">
        <MbIcon
          size="24px"
          name={EIconName.ARROW_LEFT_SMALL}
          color="blue-300"
          darkColor="blue-100"
        />
        {pages.length && (
          <ul className="px-24 flex justify-center space-x-12 text-blue-300 dark:text-blue-100">
            {pages.map((page) => (
              <li>{page}</li>
            ))}
          </ul>
        )}
        <MbIcon
          size="24px"
          name={EIconName.ARROW_RIGHT_SMALL}
          color="blue-300"
          darkColor="blue-100"
        />
      </div>
    </>
  );
};

export default MbPagination;
