import "./text.css";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {}

const MbText = (props: TextProps) => {
  return <div className={`${props.className}`}>{props.children}</div>;
};

export default MbText;
