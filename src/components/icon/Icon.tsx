import "material-icons/iconfont/material-icons.css";
import { EIconName } from "../../constants/icons";

const Icon = ({
  name,
  color = "mb-blackblue",
  size = "24px",
}: {
  name: EIconName;
  color: string;
  size?: string;
}) => {
  return (
    <>
      <span
        className={`material-icons text-${color}`}
        style={{ fontSize: size }}
      >
        {name}
      </span>
    </>
  );
};

export default Icon;
