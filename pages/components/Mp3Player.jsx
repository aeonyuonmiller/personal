import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const MP3Player = () => {
    const [playing, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef(null)
    const handlePlayPause = () => {
        if (playing) {
            audioRef.current.pause()
            setPlaying(false)
        } else {
            audioRef.current.play()
            setPlaying(true)
        }
    }

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime)
    }

    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value
    }

    return (
        <div>
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
                <source src="stranger.mp3" type="audio/mp3" />
                <p>Your browser doesn't support HTML5 audio.</p>
            </audio>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePlayPause}
            >
                {playing ? 'Pause' : 'Play'}
            </motion.button>
            <input
                type="range"
                min={0}
                max={audioRef.current ? audioRef.current.duration : 0}
                value={currentTime}
                onChange={handleSeek}
            />
            
        </div>
    )
}

export default MP3Player
