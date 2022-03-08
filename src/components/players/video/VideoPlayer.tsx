const MbVideoPlayer = ({ src }: { src: string }) => {
  return (
    <video width="750" height="500" playsInline autoPlay loop>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default MbVideoPlayer
