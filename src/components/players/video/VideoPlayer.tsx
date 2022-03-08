export const MbVideoPlayer = ({ src }: { src: string }) => {
  return (
    <video width="100%" height="100%" playsInline controls>
      <source src={src} type="video/mp4" />
    </video>
  )
}
