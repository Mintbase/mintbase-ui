enum EMediaType {
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
    'image/svg',
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

// export const VALID_FILE_FORMATS: { [key: string]: string[] } = {
//     [MetadataField.Media]: ['image/jpeg', 'image/png', 'image/gif'],
//     [MetadataField.Animation_url]: [
//       'image/png',
//       'image/jpeg',
//       'image/gif',
//       'image/svg',
//       'audio/ogg',
//       'video/webm',
//       'video/mp4',
//       'audio/mpeg',
//       'audio/mp3',
//       'model/gltf-binary',
//       'model/gltf+json',
//       'application/octet-stream',
//     ],
//     [MetadataField.Document]: ['application/pdf'],
//   }
