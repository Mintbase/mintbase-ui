import { ESize } from '../../consts'
import { MbText } from '../text/Text'

const MbCharCounter = ({
  inputSize,
  maxChars,
  counter,
}: {
  inputSize: ESize
  maxChars: number
  counter: number
}) => {
  const getCharsCounterSize = (): string => {
    switch (inputSize) {
      case ESize.SMALL:
        return 'cap-small-130'
      case ESize.BIG:
        return 'cap-big-130'
      default:
        return 'cap-med-130'
    }
  }

  return (
    <MbText
      className={`text-right pt-8 ${getCharsCounterSize()} ${
        counter === maxChars
          ? 'text-error-300 dark:text-error-100'
          : 'dark:text-white'
      }`}
    >
      {counter}/{maxChars}
    </MbText>
  )
}

export default MbCharCounter
