import React from "react";

const Tabs = (props: React.HTMLAttributes<HTMLDivElement>) => {
  if (!props.children) return <></>;
  const allTabs = React.Children.map(props.children, (child: any) => child);
  const validtabs = allTabs?.filter((tab) => tab.type.name === "Tab");

  return (
    <>
      {validtabs?.length &&
        validtabs.map((tab, index) => <div key={index}>{tab}</div>)}
    </>
  );
};

export default Tabs;
