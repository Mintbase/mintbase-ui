import { colorsArray } from '../../consts/colors'

export default {
  title: 'Core/Colors',
}

export const Colors = () => (
  <>
    <p className="heading-130 mb-8">Colors</p>
    {colorsArray.map((elm) => (
      <section className="mb-8" key={elm.sectionTitle}>
        <p className="h1-130 mb-4">{elm.sectionTitle}</p>
        <div className="flex flex-wrap gap-8">
          {elm.colors.map((color) => (
            <div key={color.class}>
              <div
                className={`w-24 h-24 bg-${color.class} rounded-md ${
                  color.class.includes('white') ? 'border-2 border-black' : ''
                }`}
              ></div>
              <div className="p-med-130">{color.class}</div>
              <div className="p-med-90">{color.hex}</div>
            </div>
          ))}
        </div>
      </section>
    ))}
  </>
)
