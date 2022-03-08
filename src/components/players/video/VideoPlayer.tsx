export const MbVideoPlayer = ({
  src,
  type = 'video/mp4',
}: {
  src: string
  type: string
}) => {
  return (
    <video width="100%" height="100%" playsInline controls>
      <source src={src} type={type} />
    </video>
  )
}
