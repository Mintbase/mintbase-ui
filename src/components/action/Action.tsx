import { getFontType } from "../../constants/fontType";
import "./action.css";

export enum ActionType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
export enum ActionState {
  ACTIVE = "active",
  DISABLED = "disabled",
}

export enum ActionSize {
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big",
}

type ActionProps = {
  label: string;
  state?: ActionState;
  size?: ActionSize;
};

const Action = ({
  label = "",
  state = ActionState.ACTIVE,
  size = ActionSize.MEDIUM,
  ...props
}: ActionProps) => {
  return (
    <button className={`action ${state} ${getFontType(size)}`} {...props}>
      <span>{label}</span>
    </button>
  );
};

export default Action;
