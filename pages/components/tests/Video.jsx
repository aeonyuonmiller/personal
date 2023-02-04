import React, { useState, useRef } from 'react'
import { m } from "framer-motion"

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
            preload="metadata" poster={placeholder}>
                <source src={src} type="video/mp4" />
                <p>Your browser doesn't support HTML5 video.</p>
            </video>
            <m.button initial={{scale:0}} whileInView={{scale:1}} whileHover={{scale: 1.05}} whileTap={{scale:.99}} onClick={handlePlayPause}>
                {playing ? 'Pause' : 'Play'}
            </m.button>
        </div>
    )
}

export default VideoPlayer