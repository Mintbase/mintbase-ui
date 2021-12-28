import React from 'react'
import "./text.css";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MbText = (props: TextProps) => {
  return <div className={`${props.className}`}>{props.children}</div>;
};
