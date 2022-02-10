import { forwardRef } from 'react'
import { getFontType, getInputLabelFontType } from '../../../consts/fontType'
import { ESize } from '../../../consts/properties'
import { EControlStatus } from '../../inputs/input-field/inputField'
import './TextArea.css'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  controlStatus: EControlStatus
  inputSize?: ESize
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
      onChange,
      value,
      inputSize = ESize.MEDIUM,
      ...restProps
    },
    ref
  ) => {
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
          className={`textarea-wrapper ${inputSize} rounded ${
            disabled ? 'disabled' : 'default ' + controlStatus
          } ${className}`}
        >
          <label className="w-full">
            <textarea
              className={`textarea ${getFontType(inputSize)}`}
              placeholder={placeholder}
              value={value}
              {...restProps}
              ref={ref}
            ></textarea>
          </label>
        </div>
      </>
    )
  }
)
