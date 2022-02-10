import React, { forwardRef } from 'react'
import { getFontType, getInputLabelFontType } from '../../../consts/fontType'
import { EIconName } from '../../../consts/icons'
import { ESize } from '../../../consts/properties'
import { MbIcon } from '../../icon/Icon'
import './inputfield.css'
import './../Input.css'

export enum EControlStatus {
  NORMAL = 'normal',
  VALID = 'valid',
  INVALID = 'invalid',
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hasIcon?: boolean
  controlStatus: EControlStatus
  inputSize?: ESize
  hasPercentageLabel?: boolean
}

export const MbInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      required,
      disabled,
      className,
      placeholder,
      controlStatus = EControlStatus.NORMAL,
      label,
      hasPercentageLabel,
      value,
      type,
      hasIcon,
      inputSize = ESize.MEDIUM,
      ...restProps
    },
    ref
  ) => {
    const getIconSize = () => {
      return inputSize === 'big' ? '24px' : '20px'
    }

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
          className={`main-input input-wrapper ${inputSize} flex items-center justify-between rounded ${
            disabled ? 'disabled' : 'default ' + controlStatus
          } ${className}`}
        >
          <label className="flex w-full">
            <input
              id={id}
              disabled={disabled}
              ref={ref}
              placeholder={hasPercentageLabel ? '' : placeholder}
              type={type}
              value={value}
              required={required}
              className={`input-field ${getFontType(inputSize)}`}
              {...restProps}
            />
            {hasPercentageLabel && (
              <span className={`${getFontType(inputSize)} text-gray-500`}>
                %
              </span>
            )}
          </label>

          {hasIcon && (
            <div className="flex">
              {controlStatus === EControlStatus.VALID ? (
                <MbIcon
                  name={EIconName.SUCCESS}
                  size={getIconSize()}
                  color="success-300"
                  darkColor="success-100"
                />
              ) : controlStatus === EControlStatus.INVALID ? (
                <MbIcon
                  name={EIconName.ERROR}
                  size={getIconSize()}
                  color="error-300 "
                  darkColor="error-100"
                />
              ) : (
                <MbIcon
                  name={EIconName.INFO}
                  size={getIconSize()}
                  color="blue-300"
                  darkColor="blue-100"
                />
              )}
            </div>
          )}
        </div>
      </>
    )
  }
)
