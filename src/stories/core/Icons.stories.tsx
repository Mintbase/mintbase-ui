import MbIcon from "../../components/icon/Icon";
import { EIconName } from "../../constants/icons";

export default {
  title: "Core/Icons",
};

export const Icons = () => (
  <section>
    <div className="w-full md:w-3/4">
      <p className="heading-130 mb-8">Icons</p>
      <p className="p-med-90 mb-12">
        how to use:{" "}
        {`<Icon name={EIconName.[name]} color="color-name" size="sizepx"/>`}
      </p>
    </div>
    <div className="w-full md:w-3/4 m-auto">
      {Object.entries(EIconName).map(([icon, name]) => (
        <div
          key={name}
          className={`w-32 rounded-md inline-block text-center m-8`}
        >
          <div className="h-24 bg-gray-100 flex items-center justify-center w-full">
            <MbIcon name={name} color="mb-blackblue" size="40px" />
          </div>
          <div className="bg-gray-200 py-8">
            <p className="cap-big-90">{icon}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
