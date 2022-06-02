import React, { useEffect, useRef, useState } from 'react'
import { MbIcon } from '../..'
import { EIconName } from '../../..'
import { ALL_TYPES, IMAGE_TYPES } from '../../../consts/fileFormats'
import { isMobile } from '../../../consts/mobile'
import AcceptedFormats from './acceptedFormats'
import { iconType, modelsHandler } from './fileFunctions'
interface MediaImportProps {
  isProfileImage?: boolean
  isHeaderImage?: boolean
  acceptedFormats: string[]
  idealDimensions: string
  uploadedFile: File
  placeholderImageURL?: string
  handleFileAdd: (file: File) => void
  handleFileRemove: () => void
  maxFileSize?: number
}

const preventBrowserDefaults = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
}

export const MbMediaImport = (props: MediaImportProps) => {
  const {
    isProfileImage,
    isHeaderImage,
    idealDimensions,
    acceptedFormats,
    uploadedFile,
    placeholderImageURL,
    handleFileAdd,
    handleFileRemove,
    maxFileSize = 5,
  } = props

  const [imageUrl, setImageUrl] = useState<any>('')
  const [internalErrorMessage, setInternalErrorMessage] = useState<
    string | null
  >(null)

  const dragRef = useRef(0)
  const [dragOverlay, setDragOverlay] = useState(false)

  const handleDrag = (event: any) => {
    preventBrowserDefaults(event)
  }

  const handleDragIn = (event: any) => {
    preventBrowserDefaults(event)
    dragRef.current++
    setDragOverlay(true)
  }

  const handleDragOut = async (event: any) => {
    preventBrowserDefaults(event)
    dragRef.current--
    if (dragRef.current === 0) {
      setDragOverlay(false)
    }
  }

  const handleDrop = async (event: any) => {
    preventBrowserDefaults(event)
    setDragOverlay(false)

    dragRef.current = 0

    if (!event.dataTransfer.files.length) {
      return
    }

    handleFileChange(event.dataTransfer.files[0], true)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = async (e: any, isDrag?: boolean) => {
    if (!isDrag) {
      if (!(e?.target?.files.length > 0)) return
    }
    const file = isDrag ? e : e.target.files[0]

    setInternalErrorMessage(null)

    const tFile = await modelsHandler(file)
    const correctFile = acceptedFormats.find((item) => item === tFile.type)

    // validate file size and accepted formats
    const { size } = file

    if (correctFile) {
      if (size / 1024 / 1024 <= maxFileSize) {
        handleFileAdd(tFile)
      } else {
        setInternalErrorMessage(`This file exceeds ${maxFileSize}mb`)
        return
      }
    } else {
      setInternalErrorMessage('This media type is not accepted')
      return
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const removeFile = (e: any) => {
    e.preventDefault()
    handleFileRemove()
  }

  useEffect(() => {
    if (uploadedFile && IMAGE_TYPES.includes(uploadedFile.type)) {
      setImageUrl(URL.createObjectURL(uploadedFile))
    } else {
      setImageUrl(null)
    }
  }, [uploadedFile])

  return (
    <>
      {placeholderImageURL && !uploadedFile && (
        <>
          <div className="pb-12">
            <div
              className={`flex items-center justify-center w-full rounded-lg bg-gray-100 dark:bg-gray-900 w-full py-24 ${
                isProfileImage && imageUrl ? 'py-24' : 'overflow-hidden'
              }`}
            >
              <div
                className={` ${
                  isProfileImage
                    ? 'w-24 h-24 sm:h-32 sm:w-32 rounded-full overflow-hidden'
                    : isHeaderImage
                    ? 'h-32 sm:h-64 w-full'
                    : 'h-48 w-48 sm:h-64 sm:w-64'
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={placeholderImageURL}
                />
              </div>
            </div>
          </div>

          <label className="block sm:hidden text-blue-300 dark:text-blue-100 p-med-90 text-center">
            Change File
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              onClick={(e) => ((e.target as HTMLInputElement).value = '')}
            />
          </label>
        </>
      )}
      {uploadedFile && (
        <>
          <div className="pb-12">
            <div
              className={`flex items-center justify-center w-full rounded-lg bg-gray-100 dark:bg-gray-900 w-full py-24 ${
                isProfileImage && imageUrl ? 'py-24' : 'overflow-hidden'
              }`}
            >
              {imageUrl ? (
                <div
                  className={` ${
                    isProfileImage
                      ? 'w-24 h-24 sm:h-32 sm:w-32 rounded-full overflow-hidden'
                      : isHeaderImage
                      ? 'h-32 sm:h-64 w-full'
                      : 'h-48 w-48 sm:h-64 sm:w-64'
                  }`}
                >
                  <img className="w-full h-full object-cover" src={imageUrl} />
                </div>
              ) : (
                <div className="flex items-center py-32 space-x-24 max-w-80% sm:max-w-40%">
                  <MbIcon
                    name={iconType(uploadedFile.type)}
                    color="black"
                    darkColor="white"
                    size="64px"
                  />
                  <div>
                    <p className="p-med-90 text-black dark:text-white break-words">
                      {uploadedFile.name}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <label className="block sm:hidden text-blue-300 dark:text-blue-100 p-med-90 text-center">
            Change File
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              onClick={(e) => ((e.target as HTMLInputElement).value = '')}
            />
          </label>
        </>
      )}
      <div className={`${uploadedFile && isMobile() ? 'hidden' : ''}`}>
        <div className="flex items-center justify-center w-full">
          <label
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`flex flex-col rounded-lg transition-all duration-500 ${
              dragOverlay
                ? 'bg-gray-100 dark:bg-gray-900'
                : 'bg-blue-300-15 dark:bg-blue-100-15 hover:bg-gray-100 dark:hover:bg-gray-900'
            } w-full py-32 sm:py-48 group text-center cursor-pointer ${
              internalErrorMessage
                ? 'ring-1 ring-error-300 dark:ring-error-100'
                : ''
            }`}
          >
            <div className="h-full w-full text-center flex flex-col items-center justify-center p-med-90">
              <p className="text-blue-300 dark:text-blue-100">Upload File</p>
              <p className="text-gray-600 dark:text-gray-300 hidden sm:block">
                (or just drop your file here)
              </p>
              {uploadedFile && (
                <p
                  className="text-error-300 dark:text-error-100 hidden sm:block pt-24"
                  onClick={removeFile}
                >
                  Remove File
                </p>
              )}
            </div>
            {internalErrorMessage && (
              <div className="flex justify-center items-center pt-16">
                <p className="text-error-300 dark:text-error-100 cap-big-90 pr-12">
                  {internalErrorMessage}
                </p>
                <MbIcon
                  name={EIconName.ERROR}
                  size="20px"
                  color="error-300 "
                  darkColor="error-100"
                />
              </div>
            )}
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              onClick={(e) => ((e.target as HTMLInputElement).value = '')}
            />
          </label>
        </div>
        <AcceptedFormats
          acceptedFormats={acceptedFormats}
          idealDimensions={idealDimensions}
          maxSize={maxFileSize}
        />
      </div>
    </>
  )
}
