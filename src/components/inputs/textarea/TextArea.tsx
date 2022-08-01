import { forwardRef, useState } from 'react'
import { getFontType, getInputLabelFontType } from '../../../consts/fontType'
import { ESize } from '../../../consts/properties'
import { EControlStatus } from '../../inputs/input-field/inputField'
import './TextArea.css'
import './../Input.css'
import { MbCharCounter } from '../../counters/CharCounter'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  controlStatus: EControlStatus
  inputSize?: ESize
  maxChars?: number
}

export const MbTextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      required,
      disabled,
      className,
      placeholder,
      controlStatus = EControlStatus.NORMAL,
      label,
      maxChars,
      onChange,
      value,
      inputSize = ESize.MEDIUM,
      ...restProps
    },
    ref
  ) => {
    const [count, setCount] = useState(0)

    return (
      <>
        {label && (
          <label
            className={`block mb-8 dark:text-white ${getInputLabelFontType(
              inputSize
            )}`}
          >
            {label}
            {required && (
              <span className="text-error-300 dark:text-error-100"> *</span>
            )}
          </label>
        )}
        <div
          className={`main-input textarea-wrapper ${inputSize} rounded ${
            disabled ? 'disabled' : 'default ' + controlStatus
          } ${className}`}
        >
          <label className="w-full">
            <textarea
              maxLength={maxChars}
              className={`textarea ${getFontType(inputSize)}`}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                if (maxChars) {
                  setCount(e.target.value.length)
                }
                if (!onChange) return
                onChange(e)
              }}
              {...restProps}
              ref={ref}
            ></textarea>
          </label>
        </div>
        {maxChars ? (
          <MbCharCounter
            counter={count}
            inputSize={inputSize}
            maxChars={maxChars}
          />
        ) : (
          <></>
        )}
      </>
    )
  }
)
