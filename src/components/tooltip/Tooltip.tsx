import ReactTooltip, { Place } from "react-tooltip";
import "./tooltip.css";

const MbTooltip = ({
  text,
  place = "bottom",
  component,
}: {
  text: string;
  place: Place;
  component: JSX.Element;
}) => {
  return (
    <>
      <span data-tip data-for="tooltip" className="w-min flex cursor-pointer">
        {component}
      </span>

      <ReactTooltip
        id="tooltip"
        type="info"
        effect="solid"
        place={place}
        backgroundColor="rgba(0,0,0,0.6)"
        arrowColor="transparent"
        getContent={() => {
          return <span className="cap-big-90">{text}</span>;
        }}
      />
    </>
  );
};

export default MbTooltip;
