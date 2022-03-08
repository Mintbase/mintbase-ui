import { useEffect, useRef, useState } from 'react'
import { MbAction } from '../../action/Action'

export const MbModelPlayer = ({
  modelSrc,
  posterImg,
  ...restProps
}: {
  modelSrc: string
  posterImg: JSX.Element
}) => {
  const [animations, setAnimations] = useState<any>([])
  useEffect(() => {
    import('@google/model-viewer/dist/model-viewer')
  }, [])

  const elementRef = useRef<any>()

  useEffect(() => {
    elementRef.current.addEventListener('load', handleEvent)
  }, [elementRef])

  const handleEvent = () => {
    const _animations = elementRef.current.availableAnimations ?? ['']

    setAnimations([..._animations])
  }
  return (
    <model-viewer
      style={{ height: '100%', width: '100%' }}
      ref={elementRef}
      src={modelSrc}
      //   reveal="interaction"
      animation-name={animations?.length > 0 ? animations[0] : ''}
      shadow-intensity="1"
      //   autoplay={false}
      //   ar={true}
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      {...restProps}
    >
      <div slot="poster">{posterImg}</div>
      <MbAction slot="poster">Click to show 3D model</MbAction>
    </model-viewer>
  )
}
