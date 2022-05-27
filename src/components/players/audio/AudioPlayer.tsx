import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { EIconName } from '../../../consts'
import { MbIcon } from '../../icon/Icon'
import './AudioPlayer.css'

function display(seconds: number) {
  const format = (val: any) => `0${Math.floor(val)}`.slice(-2)
  const hours = seconds / 3600
  const minutes = (seconds % 3600) / 60

  return [minutes, seconds % 60].map(format).join(':')
}

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
}: {
  isPlaying: boolean
  onPlayPauseClick: (value: boolean) => void
}) => {
  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={(e) => {
          e.stopPropagation()
          onPlayPauseClick(!isPlaying)
        }}
      >
        {isPlaying ? (
          <MbIcon
            name={EIconName.PAUSE}
            size="42px"
            color="black"
            darkColor="white"
          />
        ) : (
          <MbIcon
            name={EIconName.PLAY}
            size="42px"
            color="black"
            darkColor="white"
          />
        )}
      </div>
    </div>
  )
}

export const MbAudioPlayer = ({ src }: { src: string }) => {
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState('')

  const [progress, setProgress] = useState<{
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
  }>({ played: 0, playedSeconds: 0, loaded: 0, loadedSeconds: 0 })

  const handlePlayPause = (isPlaying: boolean) => {
    setIsPlaying(isPlaying)
  }

  const handleGetProgress = (progress: {
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
  }) => {
    setProgress(progress)
  }

  const onChange = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    if (!playerRef) return
    if (!playerRef.current) return
    // @ts-ignore
    playerRef?.current?.seekTo(parseFloat(event.target.value))
  }

  useEffect(() => {
    if (progress.played >= 0.99) setIsPlaying(false)
  }, [progress])

  return (
    <div>
      <>
        <input
          type="range"
          min="0"
          max="1"
          step="any"
          value={progress.played}
          onChange={onChange}
          className="cursor-pointer w-full h-px bg-black dark:bg-white appearance-none slider-thumb"
        />
        <div className="flex justify-between items-center p-med-90 text-gray-700 dark:text-gray-300 mt-12">
          <div>{display(progress.playedSeconds)}</div>
          <AudioControls
            isPlaying={isPlaying}
            onPlayPauseClick={handlePlayPause}
          />

          <div>{duration}</div>
        </div>
      </>

      <ReactPlayer
        ref={playerRef}
        url={src}
        controls={false}
        playing={isPlaying}
        height={'0px'}
        width={'0px'}
        playsinline={true}
        onProgress={handleGetProgress}
        onDuration={(duration: number) => {
          setDuration(display(duration))
        }}
      />
    </div>
  )
}
