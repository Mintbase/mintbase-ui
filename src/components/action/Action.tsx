import { getFontType } from "../../constants/fontType";
import { ESize, EState } from "../../constants/properties";
import "./action.css";

type ActionProps = {
  label: string;
  state?: EState.ACTIVE | EState.DISABLED;
  size?: ESize;
};

const Action = ({
  label = "",
  state = EState.ACTIVE,
  size = ESize.MEDIUM,
  ...props
}: ActionProps) => {
  return (
    <button className={`action ${state} ${getFontType(size)}`} {...props}>
      <span>{label}</span>
    </button>
  );
};

export default Action;
