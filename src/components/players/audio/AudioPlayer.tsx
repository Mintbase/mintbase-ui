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
  isLoading,
  isPlaying,
  onPlayPauseClick,
}: {
  isPlaying: boolean
  isLoading: boolean
  onPlayPauseClick: (value: boolean) => void
}) => {
  return (
    <div>
      {!isLoading && (
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            console.log('cenas')
            onPlayPauseClick(!isPlaying)
          }}
        >
          {isPlaying ? (
            <MbIcon name={EIconName.PAUSE} size="42px" color="black" />
          ) : (
            <MbIcon name={EIconName.PLAY} size="42px" color="black" />
          )}
        </div>
      )}
    </div>
  )
}

export const MbAudioPlayer = ({ src }: { src: string }) => {
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
    console.log(src)
    if (progress.played >= 0.99) setIsPlaying(false)
  }, [progress])

  return (
    <div>
      <AudioControls
        isLoading={isLoading}
        isPlaying={isPlaying}
        onPlayPauseClick={handlePlayPause}
      />

      {!isLoading && (
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 10px',
            }}
          >
            <div>{display(progress.playedSeconds)}</div>
            <div>{duration}</div>
          </div>
        </>
      )}

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
