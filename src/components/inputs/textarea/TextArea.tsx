import { forwardRef } from 'react'
import { InputProps } from '../input-field/inputField'
import { EControlStatus } from '../../inputs/input-field/inputField'
import { getFontType } from '../../../consts/fontType'
import { ESize } from '../../../consts/properties'

export const MbTextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  (
    {
      id,
      required,
      textarea,
      disabled,
      className,
      placeholder,
      controlStatus = EControlStatus.NORMAL,
      label,
      onChange,
      hasPercentageLabel,
      value,
      type,
      hasIcon,
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
      ></textarea>
    )
  }
)
