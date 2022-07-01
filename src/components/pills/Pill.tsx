import { EPillTemplate } from '../../consts/pillTemplate'
import { MbText } from '../text/Text'

export const MbPill = ({
  text,
  pillTemplate,
}: {
  text: string
  pillTemplate: EPillTemplate
}) => {
  const getColors = () => {
    switch (pillTemplate) {
      case EPillTemplate.BLACK:
        return 'bg-gray-700 dark:bg-gray-300 bg-opacity-10 text-black dark:text-white dark:bg-opacity-20'
      case EPillTemplate.PURPLE:
        return 'bg-purple-300 dark:bg-purple-100 bg-opacity-10 text-purple-300 dark:text-purple-100 dark:bg-opacity-20'
      case EPillTemplate.BLUE:
        return 'bg-blue-300 bg-opacity-10 dark:bg-blue-100 text-blue-300 dark:text-blue-100 dark:bg-opacity-20'
      case EPillTemplate.GREEN:
        return 'bg-success-300 bg-opacity-10 dark:bg-success-100 text-success-300 dark:text-success-100 dark:bg-opacity-20'
      case EPillTemplate.RED:
        return 'bg-error-300 bg-opacity-10 dark:bg-error-100 text-error-300 dark:text-error-100 dark:bg-opacity-20'
      case EPillTemplate.ORANGE:
        return 'bg-orange-300 bg-opacity-10 dark:bg-opacity-20 dark:bg-orange-100 text-orange-300 dark:text-orange-100'
    }
  }

  return (
    <div>
      <div className={`p-5 md:p-6 rounded ${getColors()} w-auto inline-block`}>
        <MbText className="p-small-130 uppercase tracking-widest">
          {text}
        </MbText>
      </div>
    </div>
  )
}
