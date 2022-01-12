export enum EMediaType {
  IMAGE = 'image',
  ANIMATION = 'animation',
  DOCUMENT = 'document',
}

export const VALID_FILE_FORMATS = {
  [EMediaType.IMAGE]: ['image/jpeg', 'image/png', 'image/gif'],
  [EMediaType.ANIMATION]: [
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/svg+xml',
    'audio/ogg',
    'video/webm',
    'video/mp4',
    'audio/mpeg',
    'audio/mp3',
    'model/gltf-binary',
    'model/gltf+json',
    'application/octet-stream',
  ],
  [EMediaType.DOCUMENT]: ['application/pdf'],
}

export const AUDIO_TYPES = ['audio/ogg', 'audio/mpeg', 'audio/mp3']
export const VIDEO_TYPES = ['video/webm', 'video/mp4']
export const IMAGE_TYPES = [
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/svg+xml',
]
export const THREED_TYPES = [
  'model/gltf-binary',
  'model/gltf+json',
  'application/octet-stream',
]
export const FILE_TYPES = ['application/pdf']
