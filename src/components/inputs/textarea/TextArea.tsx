import { forwardRef } from 'react'
import { InputProps } from '../input-field/inputField'
import { EControlStatus } from '../../inputs/input-field/inputField'
import { getFontType } from '../../../consts/fontType'
import { ESize } from '../../../consts/properties'

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
