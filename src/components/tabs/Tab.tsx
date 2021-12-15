import "./tab.css";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

const Tab = (props: TabProps) => {
  return (
    <>
      <div className="flex">
        <div className={`tab p-med-90 ${props.isActive ? "active" : ""}`}>
          {props.title}
        </div>
      </div>
    </>
  );
};

export default Tab;
