import React, { useState } from "react";
import { EIconName } from "../../constants/icons";
import MbAction from "../action/Action";
import MbIcon from "../icon/Icon";
import MbTab from "./Tab";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  hasFilters: boolean;
}

const OrderOptions = ({ onSelect }: { onSelect: (option: string) => void }) => {
  const labels = ["Newest", "Oldest", "Cheapest", "Most expensive"];
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-b absolute flex flex-col top-12 py-12 w-max center-sub-menu">
        {labels.map((label) => (
          <div onClick={() => onSelect(label)}>
            <MbAction label={label} />
          </div>
        ))}
      </div>
    </>
  );
};

const MbTabs = (props: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showOrderOpts, setShowOrderOpts] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("");

  if (!props.children) return <></>;
  const allTabs = React.Children.map(props.children, (child: any) => child);
  const validtabs = allTabs?.filter((tab) => tab.type.name === "MbTab");
  const tabsTitle = validtabs?.map((tab) => tab.props.title);
  const tabsContent = validtabs?.map((tab) => tab.props.children);

  return (
    <>
      <div className="flex bg-gray-50 dark:bg-gray-800 md:px-64">
        <div className="flex justify-center md:justify-start items-center space-x-24 overflow-scroll">
          {tabsTitle?.length &&
            tabsTitle.map((title, index) => (
              <>
                <div onClick={() => setSelectedTab(index)} key={index}>
                  <MbTab isActive={index === selectedTab} title={title}></MbTab>
                </div>
              </>
            ))}
        </div>
        {props.hasFilters && (
          <>
            <div className="ml-auto relative">
              <div
                className={`${
                  selectedOrder
                    ? "bg-mb-red-15 dark:bg-mb-red-35"
                    : "hover:bg-blue-300-15 dark:hover:bg-blue-100-35"
                } cursor-pointer rounded-full`}
              >
                <div
                  className="flex p-16"
                  onClick={() => setShowOrderOpts(!showOrderOpts)}
                >
                  <div
                    className={`${
                      selectedOrder
                        ? "text-mb-red"
                        : "text-blue-300 dark:text-blue-100"
                    } p-med-90 pr-10`}
                  >
                    {selectedOrder ? selectedOrder : "Order By"}
                  </div>
                  <MbIcon
                    name={EIconName.ARROW_DROP_DOWN}
                    size="16px"
                    color="blue-300"
                    darkColor="blue-100"
                  />
                </div>
              </div>
              {showOrderOpts && (
                <OrderOptions
                  onSelect={(option) => {
                    setShowOrderOpts(!showOrderOpts);
                    setSelectedOrder(option);
                  }}
                />
              )}
            </div>
          </>
        )}
      </div>
      {tabsContent?.length &&
        tabsContent?.map((content, index) => {
          return index === selectedTab && <div>{content}</div>;
        })}
    </>
  );
};

export default MbTabs;
