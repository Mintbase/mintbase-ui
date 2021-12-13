import { useState } from "react";
import { EIconName } from "../../constants/icons";
import Icon from "../icon/Icon";

const Accordion = ({
  title,
  hasIcon,
  content,
}: {
  title: string;
  hasIcon?: boolean;
  content: JSX.Element;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <main className="rounded dark:bg-gray-850 cursor-pointer dark:text-white">
      <header
        className="flex justify-between items-center p-24"
        onClick={toggle}
      >
        <div>{title}</div>
        <Icon
          name={
            isExpanded
              ? EIconName.ARROW_EXPAND_MORE
              : EIconName.ARROW_EXPAND_LESS
          }
          size="20px"
          color="black"
          darkColor="white"
        ></Icon>
      </header>
      {isExpanded && (
        <section className="p-24 border-t border-gray-150 dark:border-gray-700">
          {content}
        </section>
      )}
    </main>
  );
};

export default Accordion;
