import { colorsArray } from "../constants/colors";

export default {
  title: "Core/Colors",
};

export const Colors = () => (
  <>
    {colorsArray.map((elm) => (
      <section className="mb-8" key={elm.sectionTitle}>
        <p className="text-xl font-bold mb-4">{elm.sectionTitle}</p>
        <div className="flex flex-wrap gap-8">
          {elm.colors.map((color) => (
            <div key={color.class}>
              <div
                className={`w-24 h-24 bg-${color.class} rounded-md ${
                  color.class.includes("white") ? "border-2 border-black" : ""
                }`}
              ></div>
              <div className="text-sm font-bold">{color.class}</div>
              <div className="text-sm">{color.hex}</div>
            </div>
          ))}
        </div>
      </section>
    ))}
  </>
);
