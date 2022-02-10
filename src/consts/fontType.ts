export const getFontType = (size: string) => {
  switch (size) {
    case 'big':
      return 'p-big-90'
    case 'medium':
      return 'p-med-90'
    case 'small':
      return 'p-small-90'
  }
}

export const getInputLabelFontType = (inputSize: string) => {
  switch (inputSize) {
    case 'big':
      return 'p-med-90'
    case 'medium':
      return 'p-small-90'
    case 'small':
      return 'cap-big-90'
  }
}
