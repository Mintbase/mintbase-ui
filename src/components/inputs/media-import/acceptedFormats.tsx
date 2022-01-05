import { useEffect, useState } from 'react'

const AcceptedFormats = ({
  acceptedFormats,
  idealDimensions,
  maxSize,
}: {
  acceptedFormats: string[]
  idealDimensions: string
  maxSize: number
}) => {
  const [formats, setFormats] = useState<string[]>([])
  useEffect(() => {
    setFormats(acceptedFormats.map((format) => `.${format.split('/').pop()}`))
  }, [acceptedFormats])
  return (
    <p className="hidden sm:block p-med-90 text-gray-700 dark:text-gray-500 pt-12 text-center">
      {acceptedFormats && (
        <>
          Accepted Formats:{' '}
          <span className="text-black dark:text-white">
            {formats.join(' / ')}
          </span>{' '}
          {(idealDimensions || maxSize) && <>|</>}{' '}
        </>
      )}
      {idealDimensions && (
        <>
          Ideal dimension:{' '}
          <span className="text-black dark:text-white">{idealDimensions}</span>{' '}
          {maxSize && <>|</>}{' '}
        </>
      )}
      {maxSize && (
        <>
          Max size:{' '}
          <span className="text-black dark:text-white">{maxSize}mb</span>
        </>
      )}
    </p>
  )
}

export default AcceptedFormats
