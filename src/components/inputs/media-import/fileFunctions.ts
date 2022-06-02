import {
  AUDIO_TYPES,
  IMAGE_TYPES,
  THREED_TYPES,
  VIDEO_TYPES,
} from '../../../consts/fileFormats'
import { EIconName } from '../../../consts/icons'

export const iconType = (fileType: string) => {
  if (AUDIO_TYPES.includes(fileType)) {
    return EIconName.AUDIO
  } else if (IMAGE_TYPES.includes(fileType)) {
    return EIconName.IMAGE
  } else if (VIDEO_TYPES.includes(fileType)) {
    return EIconName.VIDEO
  } else if (THREED_TYPES.includes(fileType)) {
    return EIconName.THREED
  } else {
    return EIconName.FILE
  }
}

export const fileHandler = async (originalFile: File): Promise<File> => {
  if (originalFile.name.split('.')[1].startsWith('glb'))
    return new File(
      [new Blob([await originalFile.arrayBuffer()])],
      originalFile.name,
      { type: 'model/gltf-binary' }
    )

  if (originalFile.name.split('.')[1].startsWith('gltf'))
    return new File(
      [new Blob([await originalFile.arrayBuffer()])],
      originalFile.name,
      { type: 'model/gltf+json' }
    )

  return originalFile
}
