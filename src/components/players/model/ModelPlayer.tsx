import { useEffect } from 'react'

export const MbModelPlayer = ({modelSrc, imgSrc }:{modelSrc: string, imgSrc: string}) => {
  useEffect(() => {
    import('@google/model-viewer/dist/model-viewer')
  }, [])
  return (
    <model-viewer
      style={{ height: '100%', width: '100%' }}
      ref={elementRef}
      src={src}
      reveal="interaction"
      animation-name={animations?.length > 0 ? animations[0] : ''}
      shadow-intensity="1"
      autoplay={!isBasic}
      ar={true}
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      {...restProps}
    >
      <Poster src={poster} slot="poster" />
      <ShowModelButton slot="poster">Click to show 3D model</ShowModelButton>
    </model-viewer>
  )
}
