import React, { Children, HTMLAttributes } from "react";

const Tab = () => {};

const Tabs = (props: React.HTMLAttributes<HTMLDivElement>) => {
  if (!props.children) return <></>;

  {
    React.Children.map(props.children, (child: any) =>
      console.log(props.children, child?.type)
    );
  }

  // const tabs = React.Children.map(fn: (child: any)  => child.type.displayName === 'Tab');
  return <></>;
};

export default Tabs;
