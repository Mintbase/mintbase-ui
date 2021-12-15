import "./text.css";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  tag: string;
}

const Text = (props: TextProps) => {
  return (
    <div className={`${props.tag} ${props.className}`}>{props.children}</div>
  );
};

export default Text;
