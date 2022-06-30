import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { uuid } from 'uuidv4'
import { ESize, EState, EType } from '../../../../consts'
import { TNearAccountState } from '../../../../types'
import { MbAction } from '../../../action/Action'
import { MbButton } from '../../../buttons/button/Button'
import { MbInfoCard } from '../../../cards/info/InfoCard'
import { EControlStatus, MbInput } from '../../input-field/inputField'
import { MbInputAccount } from '../InputAccount'

export const MbNearAccountList = ({
  subtitle,
  smallSubtitle,
  accountExists,
  saveButton,
}: {
  subtitle: string
  smallSubtitle: string
  accountExists: (account: string) => Promise<boolean>
  saveButton?: {
    text: string
    save: (accounts: string[]) => void
  }
}) => {
  const [used, setUsed] = useState<number>(0)
  const [state, setState] = useState<Record<string, TNearAccountState>>({})
  const [isValid, setValid] = useState(false)
  const [hasFilledFields, setHasFilledFields] = useState(false)
  const [allCleared, setAllCleared] = useState(false)

  const addFieldsToState = () => {
    let auxState: Record<string, TNearAccountState> = {}

    for (let i = 0; i < 100; i++) {
      const id = uuid()

      auxState = {
        ...auxState,
        [id]: {
          account: {
            value: '',
            valid: false,
          },
          cleared: false,
        },
      }
    }

    return auxState
  }

  const sumStateAccounts = (state: Record<string, TNearAccountState>) => {
    return Object.values(state).filter(
      (elm) => elm.account.valid && elm.account.value
    ).length
  }

  const handleChangeAccount = async (id: string, account: string) => {
    const newState = { ...state }
    newState[id].account.value = account
    setState(newState)
    setAllCleared(false)
    setUsed(sumStateAccounts(newState))
  }

  const validateAccountById = (id: string, valid: boolean) => {
    const newState = { ...state }
    newState[id].account.valid = valid
    setState(newState)
  }

  const validateAccount = async (id: string, account: string) => {
    const valid = await accountExists(account)

    validateAccountById(id, valid)

    return valid
  }

  const reset = () => {
    const newState = {
      ...addFieldsToState(),
    }
    setState(newState)

    setUsed(0)
    Object.keys(state).forEach((id) => {
      const amountInput = document.getElementById(
        `amount-${id}`
      ) as HTMLInputElement
      const accountInput = document.getElementById(
        `account-${id}`
      ) as HTMLInputElement
      if (!amountInput || !accountInput) return
      amountInput.value = ''
      accountInput.value = ''
    })
    setAllCleared(true)
  }

  useEffect(() => {
    setHasFilledFields(
      Object.keys(state).filter((key) => state[key].account.value).length > 0
    )

    const filterState = Object.keys(state).filter(
      (key) => state[key].account.value
    )

    const isValidForm =
      filterState.length > 0 &&
      filterState.filter((key) => state[key].account.valid).length ===
        filterState.length

    const isFinalValid = isValidForm

    setValid(isFinalValid)
  }, [state])

  useEffect(() => {
    setState({ ...addFieldsToState() })
  }, [])

  return (
    <>
      <MbInputAccount
        subtitle={subtitle}
        smallSubtitle={smallSubtitle}
        inputs={
          <>
            <div>
              {Object.keys(state).map((id, index) => {
                const { account, cleared } = state[id]
                return (
                  <div key={id} className="mb-12">
                    <MbInput
                      id={`account-${id}`}
                      type="text"
                      inputSize={ESize.BIG}
                      hasIcon={!(cleared || !account.value)}
                      placeholder={'account.near'}
                      controlStatus={
                        cleared || !account.value
                          ? EControlStatus.NORMAL
                          : account.valid
                          ? EControlStatus.VALID
                          : EControlStatus.INVALID
                      }
                      onChange={debounce(async (e) => {
                        const value = e.target.value ?? null
                        const valid = await validateAccount(id, value)
                        account.valid = valid
                        handleChangeAccount(id, value)
                      }, 500)}
                    />
                  </div>
                )
              })}
            </div>
          </>
        }
        footer={
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full gap-24">
            <div className="grid grid-cols-2 gap-12 text-left">
              <MbInfoCard
                boxInfo={{
                  description: `${used}`,
                  title: 'Accounts',
                }}
              />
            </div>
            <div className="flex items-center justify-center md:justify-end gap-24">
              <MbAction
                state={
                  hasFilledFields && !allCleared
                    ? EState.ACTIVE
                    : EState.DISABLED
                }
                onClick={(e) => {
                  e.preventDefault()
                  if (!hasFilledFields && allCleared) return
                  reset()
                }}
              >
                <span>Clear all</span>
              </MbAction>
              {saveButton && (
                <MbButton
                  btnType={EType.PRIMARY}
                  label={saveButton.text}
                  size={ESize.MEDIUM}
                  state={isValid ? EState.ACTIVE : EState.DISABLED}
                  onClick={() => {
                    if (!isValid) return
                    saveButton.save(
                      Object.values(state)
                        .filter((value) => value.account.value)
                        .map((elm) => elm.account.value)
                    )
                  }}
                  disabled={!isValid}
                />
              )}
            </div>
          </div>
        }
      />
    </>
  )
}
