import { colorsArray } from "../../constants/colors";

export default {
  title: "Core/Colors",
};

export const Colors = () => (
  <>
    <p className="heading-bold mb-8">Colors</p>
    {colorsArray.map((elm) => (
      <section className="mb-8" key={elm.sectionTitle}>
        <p className="h1-bold mb-4">{elm.sectionTitle}</p>
        <div className="flex flex-wrap gap-8">
          {elm.colors.map((color) => (
            <div key={color.class}>
              <div
                className={`w-24 h-24 bg-${color.class} rounded-md ${
                  color.class.includes("white") ? "border-2 border-black" : ""
                }`}
              ></div>
              <div className="med-p-bold">{color.class}</div>
              <div className="med-p">{color.hex}</div>
            </div>
          ))}
        </div>
      </section>
    ))}
  </>
);
