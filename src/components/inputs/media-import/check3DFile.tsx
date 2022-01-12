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