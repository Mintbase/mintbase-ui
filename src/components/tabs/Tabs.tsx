import React, { useState } from "react";
import MbTab from "./Tab";

const MbTabs = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const [selectedTab, setSelectedTab] = useState(0);

  if (!props.children) return <></>;
  const allTabs = React.Children.map(props.children, (child: any) => child);
  const validtabs = allTabs?.filter((tab) => tab.type.name === "MbTab");
  const tabsTitle = validtabs?.map((tab) => tab.props.title);
  const tabsContent = validtabs?.map((tab) => tab.props.children);

  return (
    <>
      <div className="flex bg-gray-50 dark:bg-gray-800 md:px-64 justify-center md:justify-start items-center space-x-24 overflow-scroll">
        {tabsTitle?.length &&
          tabsTitle.map((title, index) => (
            <>
              <div onClick={() => setSelectedTab(index)} key={index}>
                <MbTab isActive={index === selectedTab} title={title}></MbTab>
              </div>
            </>
          ))}
      </div>
      {tabsContent?.length &&
        tabsContent?.map((content, index) => {
          return index === selectedTab && <div>{content}</div>;
        })}
    </>
  );
};

export default MbTabs;
