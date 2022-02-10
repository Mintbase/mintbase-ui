import { forwardRef } from 'react'
import { getFontType } from '../../../consts/fontType'
import { ESize } from '../../../consts/properties'
import { EControlStatus } from '../../inputs/input-field/inputField'

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
      <textarea
        className={`input-field textarea ${getFontType(inputSize)}`}
        placeholder={placeholder}
        value={value}
        {...restProps}
        ref={ref}
      ></textarea>
    )
  }
)
