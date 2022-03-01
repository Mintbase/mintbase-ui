import { MbIcon } from '../..'
import { EIconName } from '../../..'

interface InputTagsProps {
  label: string
  tags: string[]
}

const InputTags = (props: InputTagsProps) => {
  const { label, tags } = props
  return (
    <>
      <label className="label">{{ label }}</label>
      <div className="wrap-options">
        {tags?.map((tag, index) => (
          <div key={index}>
            <div>
              <MbIcon
                name={EIconName.CLOSE}
                size="16px"
                color="white"
                darkColor="black"
              />
              <div>{tag.label}</div>
            </div>
          </div>
        ))}
      </div>
      <input type="hidden" />
    </>
  )
}

export default InputTags
