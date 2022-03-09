import { useEffect, useRef, useState } from 'react'
import { ESize } from '../../../consts'
import { MbAction } from '../../action/Action'
import { MbButton } from '../../buttons/button/Button'

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
      reveal="interaction"
      animation-name={animations?.length > 0 ? animations[0] : ''}
      shadow-intensity="1"
      autoplay={false}
      ar={true}
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      {...restProps}
    >
      <div slot="poster" className="relative">
        {posterImg}
        <div className="absolute bottom-2 left-2">
          <MbButton
            slot="poster"
            label="3D model"
            size={ESize.SMALL}
          ></MbButton>
        </div>
      </div>
    </model-viewer>
  )
}
