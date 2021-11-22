export enum ActionType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
export enum ActionState {
  NORMAL = "normal",
  DISABLED = "disabled",
}

export enum ActionSize {
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big",
}

type ActionProps = {
  label: string;
  disabled?: boolean;
  state?: ActionState;
  size?: ActionSize;
};

const Action = ({
  label = "",
  state = ActionState.NORMAL,
  size = ActionSize.MEDIUM,
  ...props
}: ActionProps) => {
  if (props.disabled) state = ActionState.DISABLED;
  return (
    <button className={`action ${state} ${size}`} {...props}>
      <span>{label}</span>
    </button>
  );
};

export default Action;
