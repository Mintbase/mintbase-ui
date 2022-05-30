import { useEffect } from 'react'

export const MbVideoPlayer = ({
  src,
  type = 'video/mp4',
}: {
  src: string
  type: string
}) => {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'apple-mobile-web-app-capable'
    meta.content = 'yes'
    document.head.appendChild(meta)
  }, [])
  return (
    <video
      width="100%"
      height="100%"
      playsInline
      controls
      crossOrigin="Anonymous"
      autoPlay={false}
    >
      <source src={src} type={type} />
    </video>
  )
}
