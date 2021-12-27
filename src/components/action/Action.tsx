import { getFontType } from "../../constants/fontType";
import { ESize, EState } from "../../constants/properties";
import "./action.css";

interface ActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  state?: EState.ACTIVE | EState.DISABLED;
  size?: ESize;
}

const MbAction = ({
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

export default MbAction;
