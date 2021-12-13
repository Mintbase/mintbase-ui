import { useState } from "react";
import { EIconName } from "../../constants/icons";
import Icon from "../icon/Icon";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  hasIcon?: boolean;
}

const Accordion = (props: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <main className="rounded dark:bg-gray-850 cursor-pointer dark:text-white">
      <header
        className="flex justify-between items-center p-24 border-b border-gray-150 dark:border-gray-700"
        onClick={toggle}
      >
        <div>{props.title}</div>
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
      {isExpanded && <section className="p-24">{props.children}</section>}
    </main>
  );
};

export default Accordion;
