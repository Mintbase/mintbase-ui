import { useEffect, useState } from 'react'
import { MbIcon } from '../..'
import { EIconName, ESize, getFontType } from '../../..'
import './../Input.css'
import './InputTags.css'

const ENTER_KEY_CODE = 188
const COMMA_KEY_CODE = 13
const DELETE_KEY_CODE = 8

const preventEnterSubmit = (event: any) => {
  const keyCode = event.keyCode ? event.keyCode : event.which

  if (keyCode === 13) event.preventDefault()
}

interface InputTagsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  maxTags: number
  onTagsChange: (tags: string[]) => void
  onMaxTags: () => void
}

export const MbInputTags = (props: InputTagsProps) => {
  const { label, placeholder, maxTags, onTagsChange } = props
  const [localTags, setLocalTags] = useState<string[]>([])
  const [isInvalid, setIsInvalid] = useState(false)

  const handleKeyUp = (event: any) => {
    const keyCode = event.keyCode ? event.keyCode : event.which

    if (isInvalid) return

    if (keyCode === ENTER_KEY_CODE || keyCode === COMMA_KEY_CODE) {
      const tag = event.target.value.trim().split(',')

      if (tag.length === 0 || tag[0] === '') {
        return
      }

      setLocalTags([...localTags, tag[0]])

      event.target.value = ''
    }
  }

  const handleKeyDown = (event: any) => {
    preventEnterSubmit(event)
    if (isInvalid) return

    const keyCode = event.keyCode ? event.keyCode : event.which

    if (keyCode === DELETE_KEY_CODE && event.target.value === '') {
      removeTag(localTags.length - 1)
      return
    }
  }

  const removeTag = (index: number) => {
    const _tags = localTags.slice()

    _tags.splice(index, 1)
    setLocalTags(_tags)
  }

  useEffect(() => {
    setIsInvalid(localTags.length > maxTags)
    onTagsChange(localTags)
  }, [localTags])

  return (
    <>
      <label className="label">{label}</label>
      <div
        className={`main-input default ${
          isInvalid ? 'invalid' : ''
        } input-tags no-scrollbar`}
      >
        {localTags?.map((tag, index) => (
          <div key={index} className="mr-8">
            <div className="flex gap-0.5 items-center rounded-full w-max cursor-pointer relative bg-blue-300 dark:bg-blue-100 py-4 px-8">
              <div onClick={() => removeTag(index)}>
                <MbIcon
                  name={EIconName.CLOSE}
                  size="16px"
                  color="white"
                  darkColor="black"
                />
              </div>

              <div className="p-med-90 pt-2 text-white dark:text-black">
                {tag}
              </div>
            </div>
          </div>
        ))}
        <label className="flex w-full">
          <input
            placeholder={localTags.length > 0 ? '' : placeholder}
            type="text"
            className={`input-field-tags ${getFontType(ESize.BIG)}`}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          />
        </label>
      </div>
    </>
  )
}
