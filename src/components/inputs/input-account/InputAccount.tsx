import React from 'react'
import { MbAction, MbButton } from '../../..'
import { EIconName } from '../../../consts/icons'
import { ESize, EState, EType } from '../../../consts/properties'
import { MbAccordion } from '../../accordion/Accordion'
import { MbIcon } from '../../icon/Icon'
import { EControlStatus, MbInput } from '../input-field/inputField'
import './inputaccount.css'

type TInputListGroup = {
  amount?: TInput
  account: TInput
}

interface TInput extends React.InputHTMLAttributes<HTMLInputElement> {
  status: EControlStatus
}
interface InputAccountProps {
  maxAmount: number
  subtitle: string
  smallSubtitle: string
  inputList: TInputListGroup[]
  footerTitle: string
  leftFooterContent?: JSX.Element
  fieldPercentageLabel?: boolean
  removeInputHandler: (index: number) => void
  accountInputChangeHandler: (e: any, index: number) => void
  amountInputChangeHandler?: (e: any, index: number) => void
  footerAction: () => void
}
export const MbInputAccount = (props: InputAccountProps) => {
  const {
    maxAmount,
    subtitle,
    smallSubtitle,
    inputList,
    footerTitle,
    leftFooterContent,
    fieldPercentageLabel,
    footerAction,
    removeInputHandler,
    accountInputChangeHandler,
    amountInputChangeHandler,
  } = props

  return (
    <main>
      <section className="p-2 h-72 overflow-y-scroll">
        <header>
          <p className="p-big-90 text-gray-700 dark:text-gray-300 mb-16">
            {subtitle}
          </p>
          <p className="dark:text-white p-med-90 mb-8">{smallSubtitle}</p>
        </header>

        <div>
          {inputList.length > 0 &&
            inputList.map((input, index) => {
              return (
                <div key={index} className="flex items-center space-x-12 mb-12">
                  {input.amount && amountInputChangeHandler && (
                    <div className="w-24">
                      <MbInput
                        type="number"
                        id={input.amount.id}
                        placeholder={input.amount.placeholder}
                        value={input.amount.value}
                        inputSize={ESize.BIG}
                        controlStatus={input.amount.status}
                        onChange={(e: any) =>
                          amountInputChangeHandler(e, index)
                        }
                        hasPercentageLabel={fieldPercentageLabel}
                        {...input.amount}
                      />
                    </div>
                  )}
                  <MbInput
                    type="text"
                    id={input.account.id}
                    hasIcon={input.account.status !== EControlStatus.NORMAL}
                    placeholder={input.account.placeholder}
                    value={input.account.value}
                    inputSize={ESize.BIG}
                    controlStatus={input.account.status}
                    onChange={(e: any) => accountInputChangeHandler(e, index)}
                    {...input.account}
                  />
                  <div
                    className={`${
                      inputList.length > 1
                        ? 'cursor-pointer'
                        : 'cursor-not-allowed'
                    }`}
                    onClick={() => removeInputHandler(index)}
                  >
                    <MbIcon
                      name={EIconName.DELETE}
                      size="24px"
                      color="blue-300"
                      darkColor="blue-100"
                    />
                  </div>
                </div>
              )
            })}
        </div>
      </section>
      <footer className="text-center py-24 lg:py-32 border-t border-gray-150 dark:border-gray-700 flex flex-col lg:flex-row justify-center items-center lg:relative">
        <MbAction
          state={
            inputList.length + 1 === maxAmount ? EState.DISABLED : EState.ACTIVE
          }
          size={ESize.BIG}
          onClick={footerAction}
        >
          <span>{footerTitle}</span>
        </MbAction>

        {leftFooterContent && (
          <div className="center-extra-btns">{leftFooterContent}</div>
        )}
      </footer>
    </main>
  )
}
