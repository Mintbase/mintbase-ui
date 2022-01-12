import { EIconName } from '../../../consts/icons'
import {
  AUDIO_TYPES,
  IMAGE_TYPES,
  THREED_TYPES,
  VIDEO_TYPES,
} from '../../../consts/fileFormats'

export const checkIfFileIs3D = (file: File) => {
  if (file.name.split('.').pop() === 'glb') {
    return new File([file], file.name, {
      type: 'model/gltf-binary',
    })
  } else if (file.name.split('.').pop() === 'gltf') {
    return new File([file], file.name, {
      type: 'model/gltf+json',
    })
  }

  return file
}

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
