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
  tags: string[]
}

// interface TTags {
//   label: string
//   value: string
// }

export const MbInputTags = (props: InputTagsProps) => {
  const { label, tags, placeholder } = props
  const tagsLimit = 4
  const maxTagLength = 16
  const [localTags, setLocalTags] = useState<string[]>([])

  useEffect(() => {
    if (tags.length === 0) {
      setLocalTags(['Mintbase'])
    }
  }, [])

  //   useEffect(() => {
  //     if (tags.length === 0) return
  //   }, [tags])

  const handleKeyUp = (event: any) => {
    const keyCode = event.keyCode ? event.keyCode : event.which

    // if (tags.length > tagsLimit - 1) {
    //   dispatch({
    //     type: actions.SET_ERROR,
    //     payload: 'Exceeded number of allowed tags.',
    //   })
    //   return
    // }

    if (keyCode === ENTER_KEY_CODE || keyCode === COMMA_KEY_CODE) {
      const tag = event.target.value.trim().split(',')

      if (tag.length === 0 || tag[0] === '') {
        return
      }

      setLocalTags([...tags, tag[0]])

      event.target.value = ''
    }
  }

  const handleKeyDown = (event: any) => {
    preventEnterSubmit(event)

    const keyCode = event.keyCode ? event.keyCode : event.which

    if (keyCode === DELETE_KEY_CODE && event.target.value === '') {
      removeTag(tags.length - 1)
      return
    }
  }

  const removeTag = (index: number) => {
    const _tags = tags.slice()

    _tags.splice(index, 1)
    setLocalTags(_tags)
  }

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
                {tag}
              </div>
            </div>
          </div>
        ))}
        <label className="flex w-full">
          <input
            placeholder={tags.length > 0 ? '' : placeholder}
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
