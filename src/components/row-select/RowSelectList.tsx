import { useState } from 'react'
import { EIconName, ESize, EState, EType } from '../../consts'
import { MbAction } from '../action/Action'
import { MbButton } from '../buttons/button/Button'
import { MbInfoCard } from '../cards/info/InfoCard'
import { MbIcon } from '../icon/Icon'
import { MbInputAccount } from '../inputs/input-account/InputAccount'
import { MbBody, MbHead, MbTable } from '../table/Table'
import { MbText } from '../text/Text'
import { MbCheckbox } from '../toggles/checkbox/Checkbox'

export const MbRowSelectList = ({
  elements,
  deleteRow,
  addMinters,
  removeMinters,
}: {
  elements: { id: string; content: JSX.Element; isDisabled: boolean }[]
  deleteRow: (id: string) => void
  addMinters: () => void
  removeMinters: (ids: string[]) => void
}) => {
  const [checkedList, setCheckedList] = useState<string[]>([])

  const isElementSelected = (id: string) => {
    return checkedList.includes(id)
  }

  return (
    <MbInputAccount
      smallSubtitle=""
      subtitle=""
      inputs={
        <MbTable>
          <MbHead>
            <tr>
              <td>Account</td>
            </tr>
          </MbHead>
          <MbBody>
            {elements &&
              elements.map((element) => {
                const { id, content, isDisabled } = element
                console.log(id)
                return (
                  <tr
                    key={id}
                    className={`${
                      isElementSelected(id)
                        ? 'bg-blue-300-15 dark:bg-blue-100-15'
                        : ''
                    }`}
                  >
                    <td className="flex items-center gap-12">
                      {!isDisabled && (
                        <MbCheckbox
                          checked={isElementSelected(id)}
                          onChange={(e) => {
                            if (isElementSelected(id)) {
                              setCheckedList(
                                checkedList.filter((elm) => elm !== id)
                              )
                              return
                            }
                            setCheckedList([...checkedList, id])
                          }}
                        />
                      )}

                      {content}
                    </td>
                    {isDisabled ? (
                      <></>
                    ) : (
                      checkedList.length < 1 && (
                        <td>
                          <div className="flex justify-end w-auto">
                            <span
                              className="cursor-pointer"
                              onClick={() => deleteRow(id)}
                            >
                              <MbIcon
                                name={EIconName.DELETE}
                                size="24px"
                                color="blue-300"
                                darkColor="blue-100"
                              />
                            </span>
                          </div>
                        </td>
                      )
                    )}
                  </tr>
                )
              })}
          </MbBody>
        </MbTable>
      }
      footer={
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full gap-24 px-24 pb-24">
          <div className="grid grid-cols-2 gap-12">
            <MbInfoCard
              boxInfo={{
                description: `${elements.length}`,
                title: 'Accounts',
              }}
            />
            {checkedList.length > 0 && (
              <MbInfoCard
                boxInfo={{
                  description: `${checkedList.length}`,
                  title: 'Selected Accounts',
                }}
              />
            )}
          </div>
          <div className="flex items-center justify-center md:justify-end gap-24">
            {checkedList.length > 0 && (
              <MbAction onClick={() => setCheckedList([])}>
                <span>Clear Selection</span>
              </MbAction>
            )}

            {checkedList.length > 0 ? (
              <MbButton
                btnType={EType.PRIMARY}
                state={EState.CAUTION}
                label="Remove"
                onClick={() => removeMinters(checkedList)}
              />
            ) : (
              <MbButton
                btnType={EType.PRIMARY}
                state={EState.ACTIVE}
                label="Add Minters"
                onClick={() => addMinters()}
              />
            )}
          </div>
        </div>
      }
    />
  )
}
