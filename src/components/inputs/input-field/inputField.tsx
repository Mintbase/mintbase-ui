import React, { forwardRef, useState } from 'react'
import { getFontType, getInputLabelFontType } from '../../../consts/fontType'
import { EIconName } from '../../../consts/icons'
import { ESize } from '../../../consts/properties'
import { getCurrentBreakpoint, ScreenBreakpoint } from '../../../utils'
import { MbCharCounter } from '../../counters/CharCounter'
import { MbIcon } from '../../icon/Icon'
import './../Input.css'
import './inputfield.css'

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
  maxChars?: number
  initialCounter?: number
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
      maxChars,
      initialCounter = 0,
      inputSize = ESize.MEDIUM,
      onChange,
      ...restProps
    },
    ref
  ) => {
    const [count, setCount] = useState(initialCounter)

    const getIconSize = () => {
      return inputSize === 'big' &&
        getCurrentBreakpoint() !== ScreenBreakpoint.SM
        ? '24px'
        : '20px'
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
            disabled ? 'disabled' : 'default'
          } ${controlStatus} ${className}`}
        >
          <label className="flex w-full">
            <input
              id={id}
              disabled={disabled}
              ref={ref}
              placeholder={placeholder}
              type={type}
              value={value}
              maxLength={maxChars}
              required={required}
              className={`input-field ${getFontType(inputSize)}`}
              onWheel={(e) => {
                if (type !== 'number') return
                e.currentTarget.blur()
              }}
              onChange={(e) => {
                if (maxChars) {
                  setCount(e.target.value.length)
                }
                if (!onChange) return
                onChange(e)
              }}
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
