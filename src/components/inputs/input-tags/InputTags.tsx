import { MbIcon } from '../..'
import { EIconName } from '../../..'

interface InputTagsProps {
  label: string
  tags: TTags[]
}

interface TTags {
  label: string
  value: string
}

export const MbInputTags = (props: InputTagsProps) => {
  const { label, tags } = props
  return (
    <>
      <label className="label">{{ label }}</label>
      <div className="wrap-options">
        {tags?.map((tag, index) => (
          <div key={index}>
            <div className="flex gap-4 items-center rounded-full w-max cursor-pointer relative bg-blue-300 dark:bg-blue-100">
              <MbIcon
                name={EIconName.CLOSE}
                size="16px"
                color="white"
                darkColor="black"
              />
              <div className="p-big-90 pt-2 text-white dark:text-black">
                {tag.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      <input type="hidden" />
    </>
  )
}