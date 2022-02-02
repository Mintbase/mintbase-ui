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

export const MbInput = ({
  label = '',
  hasIcon,
  controlStatus = EControlStatus.NORMAL,
  inputSize = ESize.MEDIUM,
  ...props
}: InputProps) => {
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

  return (
    <>
      {label && (
        <label className={`block mb-8 dark:text-white ${getLabelFontType()}`}>
          {label}
          {props.required && (
            <span className="text-error-300 dark:text-error-100"> *</span>
          )}
        </label>
      )}
      <div
        className={`input-wrapper ${inputSize} flex items-center justify-between rounded ${
          props.disabled ? 'disabled' : 'default ' + controlStatus
        } ${props.textarea ? 'textarea' : ''} ${props.className}`}
      >
        <label className="flex w-full">
          {props.textarea ? (
            <textarea
              className={`input-field textarea ${getFontType(inputSize)}`}
              placeholder={props.placeholder}
              onChange={() => props.onChange}
            ></textarea>
          ) : (
            <>
              <input
                disabled={props.disabled}
                placeholder={props.hasPercentageLabel ? '' : props.placeholder}
                type={props.type}
                value={props.value}
                name={props.name}
                required={props.required}
                className={`input-field ${getFontType(inputSize)}`}
                onChange={props.onChange}
              />
              {props.hasPercentageLabel && (
                <span className={`${getFontType(inputSize)} text-gray-500`}>
                  %
                </span>
              )}
            </>
          )}
        </label>

        {!props.textarea && hasIcon && (
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
