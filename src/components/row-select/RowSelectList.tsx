import { useState } from 'react'
import { EIconName } from '../../consts'
import { MbIcon } from '../icon/Icon'
import { MbInputAccount } from '../inputs/input-account/InputAccount'
import { MbBody, MbHead, MbTable } from '../table/Table'
import { MbCheckbox } from '../toggles/checkbox/Checkbox'

export const MbRowSelectList = () => {
  const [checked, setChecked] = useState(false)

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
            <tr
              className={`${
                checked ? 'bg-blue-300-15 dark:bg-blue-100-15' : ''
              }`}
            >
              <td className="flex items-center gap-12">
                <MbCheckbox
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <p>Image</p>
                <p>mintbase.near</p>
              </td>
              <td>
                <div
                  className="cursor-pointer flex justify-end"
                  onClick={() => {}}
                >
                  <MbIcon
                    name={EIconName.DELETE}
                    size="24px"
                    color="blue-300"
                    darkColor="blue-100"
                  />
                </div>
              </td>
            </tr>
          </MbBody>
        </MbTable>
      }
      footer={<>cenas</>}
    />
  )
}
