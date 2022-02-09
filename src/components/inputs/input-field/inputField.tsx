import React from 'react'
import { getFontType } from '../../../consts/fontType'
import { EIconName } from '../../../consts/icons'
import { ESize } from '../../../consts/properties'
import { MbIcon } from '../../icon/Icon'
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
  textarea?: boolean
  hasPercentageLabel?: boolean
}

export const MbInput = (props: InputProps) => {
  const getIconSize = () => {
    return inputSize === 'big' ? '24px' : '20px'
  }

  const getLabelFontType = () => {
    switch (inputSize) {
      case 'big':
        return 'p-med-90'
      case 'medium':
        return 'p-small-90'
      case 'small':
        return 'cap-big-90'
    }
  }

  const {
    required,
    textarea,
    disabled,
    className,
    placeholder,
    controlStatus = EControlStatus.NORMAL,
    label,
    onChange,
    hasPercentageLabel,
    name,
    value,
    type,
    hasIcon,
    inputSize = ESize.MEDIUM,
    ...restProps
  } = props

  return (
    <>
      {label && (
        <label className={`block mb-8 dark:text-white ${getLabelFontType()}`}>
          {label}
          {required && (
            <span className="text-error-300 dark:text-error-100"> *</span>
          )}
        </label>
      )}
      <div
        className={`input-wrapper ${inputSize} flex items-center justify-between rounded ${
          disabled ? 'disabled' : 'default ' + controlStatus
        } ${textarea ? 'textarea' : ''} ${className}`}
      >
        <label className="flex w-full">
          {textarea ? (
            <textarea
              className={`input-field textarea ${getFontType(inputSize)}`}
              placeholder={placeholder}
              onChange={() => onChange}
            ></textarea>
          ) : (
            <>
              <input
                disabled={disabled}
                placeholder={hasPercentageLabel ? '' : placeholder}
                type={type}
                value={value}
                name={name}
                required={required}
                className={`input-field ${getFontType(inputSize)}`}
                onChange={onChange}
                {...restProps}
              />
              {hasPercentageLabel && (
                <span className={`${getFontType(inputSize)} text-gray-500`}>
                  %
                </span>
              )}
            </>
          )}
        </label>

        {!textarea && hasIcon && (
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
