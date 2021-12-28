import React, { useState } from "react";
import { EIconName } from "../../consts/icons";
import { MbIcon } from "../icon/Icon";

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  hasInfoIcon?: boolean;
}

export const MbAccordion = (props: AccordionProps) => {
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
        <div className="space-x-24 flex">
          {props.hasInfoIcon && (
            <MbIcon
              name={EIconName.INFO}
              size="20px"
              color="blue-300"
              darkColor="blue-100"
            />
          )}
          <MbIcon
            name={
              isExpanded
                ? EIconName.ARROW_EXPAND_MORE
                : EIconName.ARROW_EXPAND_LESS
            }
            size="20px"
            color="black"
            darkColor="white"
          />
        </div>
      </header>
      {isExpanded && <section className="p-24">{props.children}</section>}
    </main>
  );
};
