import { MbIcon } from '../..'
import { EIconName, ESize, getFontType } from '../../..'
import './../Input.css'
import './InputTags.css'

interface InputTagsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  tags: TTags[]
}

interface TTags {
  label: string
  value: string
}

export const MbInputTags = (props: InputTagsProps) => {
  const { label, tags, placeholder } = props
  return (
    <>
      <label className="label">{label}</label>
      <div className="main-input default input-tags">
        {tags?.map((tag, index) => (
          <div key={index} className="mr-12">
            <div className="flex gap-0.5 items-center rounded-full w-max cursor-pointer relative bg-blue-300 dark:bg-blue-100 py-4 px-8">
              <MbIcon
                name={EIconName.CLOSE}
                size="16px"
                color="white"
                darkColor="black"
              />
              <div className="p-med-90 pt-2 text-white dark:text-black">
                {tag.label}
              </div>
            </div>
          </div>
        ))}
        <label className="flex w-full">
          <input
            placeholder={tags.length > 0 ? '' : placeholder}
            type="text"
            className={`input-field-tags ${getFontType(ESize.BIG)}`}
          />
        </label>
      </div>
    </>
  )
}
