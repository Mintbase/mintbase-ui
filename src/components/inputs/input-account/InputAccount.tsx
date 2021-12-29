import React from 'react'
import { MbAction, MbButton } from '../../..'
import { EIconName } from '../../../consts/icons'
import { ESize, EState, EType } from '../../../consts/properties'
import { MbAccordion } from '../../accordion/Accordion'
import { MbIcon } from '../../icon/Icon'
import { EControlStatus, MbInput } from '../input-field/inputField'

type TInputListGroup = {
  amount?: TInput
  account: TInput
}

type TInput = {
  placeholder: string
  value: string | number
  status: EControlStatus
}
interface InputAccountProps {
  maxAmount: number
  title: string
  subtitle: string
  smallSubtitle: string
  inputList: TInputListGroup[]
  footerTitle: string
  hasFooterExtraActions?: boolean
  removeInputHandler: (index: number) => void
  accountInputChangeHandler: (e: any, index: number) => void
  amountInputChangeHandler?: (e: any, index: number) => void
  footerAction: () => void
}
const MbInputAccount = (props: InputAccountProps) => {
  const {
    maxAmount,
    title,
    subtitle,
    smallSubtitle,
    inputList,
    footerTitle,
    hasFooterExtraActions,
    footerAction,
    removeInputHandler,
    accountInputChangeHandler,
    amountInputChangeHandler,
  } = props

  return (
    <MbAccordion title={title} hasInfoIcon>
      <main>
        <section className="p-24 h-72 overflow-scroll">
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
                  <div
                    key={index}
                    className="flex items-center space-x-12 mb-12"
                  >
                    {input.amount && amountInputChangeHandler && (
                      <div className="w-24">
                        <MbInput
                          type="number"
                          placeholder={input.amount.placeholder}
                          value={input.amount.value}
                          inputSize={ESize.BIG}
                          controlStatus={input.amount.status}
                          onChange={(e: any) =>
                            amountInputChangeHandler(e, index)
                          }
                        />
                      </div>
                    )}
                    <MbInput
                      type="text"
                      hasIcon={input.account.status !== EControlStatus.NORMAL}
                      placeholder={input.account.placeholder}
                      value={input.account.value}
                      inputSize={ESize.BIG}
                      controlStatus={input.account.status}
                      onChange={(e: any) => accountInputChangeHandler(e, index)}
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
        <footer className="text-center py-24 sm:py-32 border-t border-gray-150 dark:border-gray-700 flex justify-center">
          <MbAction
            label={footerTitle}
            state={
              inputList.length + 1 === maxAmount
                ? EState.DISABLED
                : EState.ACTIVE
            }
            onClick={footerAction}
          />
          {hasFooterExtraActions && (
            <div className="flex space-x-12 items-center ml-auto">
              <MbButton
                size={ESize.SMALL}
                btnType={EType.SECONDARY}
                label="Cancel"
              />
              <MbButton size={ESize.SMALL} label="Transfer Tokens" />
            </div>
          )}
        </footer>
      </main>
    </MbAccordion>
  )
}

export default MbInputAccount
