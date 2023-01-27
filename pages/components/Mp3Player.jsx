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
            <style jsx>{`
            /*********** Baseline, reset styles ***********/
            input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
            cursor: pointer;
            width: 100%;
            }

            /* Removes default focus */
            input[type="range"]:focus {
            outline: none;
            }

            /******** Chrome, Safari, Opera and Edge Chromium styles ********/
            /* slider track */
            input[type="range"]::-webkit-slider-runnable-track {
            background-color: #a8e9ff;
            border-radius: 1.5rem;
            height: 1.5rem;
            }

            /* slider thumb */
            input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none; /* Override default look */
            appearance: none;
            margin-top: -4px; /* Centers thumb on the track */
            background-color: #000000;
            border-radius: 1rem;
            height: 2rem;
            width: 2rem;
            }

            input[type="range"]:focus::-webkit-slider-thumb {
            outline: 3px solid #000000;
            outline-offset: 0.125rem;
            }

            /*********** Firefox styles ***********/
            /* slider track */
            input[type="range"]::-moz-range-track {
            background-color: #a8e9ff;
            border-radius: 1.5rem;
            height: 1.5rem;
            }

            /* slider thumb */
            input[type="range"]::-moz-range-thumb {
            background-color: #000000;
            border: none; /*Removes extra border that FF applies*/
            border-radius: 1rem;
            height: 2rem;
            width: 2rem;
            }

            input[type="range"]:focus::-moz-range-thumb{
            outline: 3px solid #000000;
            outline-offset: 0.125rem;
            }
            `}</style>
        </div>
    )
}

export default MP3Player
