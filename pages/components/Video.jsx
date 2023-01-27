import React, { useState, useRef } from 'react'

const VideoPlayer = ({src = "", placeholder = ""}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handlePlayPause = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className="videoz">
            <video autoplay ref={videoRef} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
            preload="none" poster={placeholder}>
                <source src={src} type="video/mp4" />
                <p>Your browser doesn't support HTML5 video.</p>
            </video>
            <button onClick={handlePlayPause}>
                {playing ? 'Pause' : 'Play'}
            </button>
        </div>
    )
}

export default VideoPlayer