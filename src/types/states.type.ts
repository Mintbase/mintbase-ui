export type TInputState = {
  amount: {
    value: number
    valid: boolean
  }
  account: {
    value: string
    valid: boolean
  }
  editable: boolean
  cleared: boolean
}
