import { EIconName } from "../../constants/icons";
import Icon from "../icon/Icon";

const Accordion = ({
  title,
  hasIcon,
}: {
  title: string;
  hasIcon?: boolean;
}) => {
  return (
    <main className="rounded dark:bg-gray-850">
      <header>
        <div className="flex">
          <div>{title}</div>
          <Icon
            name={EIconName.ARROW_DROP_DOWN}
            size="20px"
            color="black"
            darkColor="white"
          ></Icon>
        </div>
      </header>
    </main>
  );
};

export default Accordion;
