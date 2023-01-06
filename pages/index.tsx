import Head from 'next/head'
import Image from 'next/image'
import Nav from "./components/Nav"
// import styles from '../styles/Home.module.css'
import { motion as m } from "framer-motion"

import Thumbnail from "./components/Thumbnail"

export default function Home() {
  
  return (
    <>
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=aeonyuonmiller"></script>
      <Head>
        <title>aym</title>
        <meta name="description" content="website of aeon yuon miller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <m.video
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 } }}
        exit={{ scale: 0.95, opacity: 0, transition:{ ease: [.63, 0, .17, .99], duration: .8, delay: .4 }}}
        className='chrome'
        width="700px"
        height="auto"
        preload="auto"
        autoPlay
        loop>
        <source src="/chromed2-s.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </m.video>

      <Nav url="about" title="/ Works" gototitle="-> About" />

      <m.div className='scrollcontainer'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 } }}
        exit={{ y: 50, opacity: 0, transition:{ ease: [.63, 0, .17, .99], duration: .8, delay: .4 }}}>
        <Thumbnail motive="./img1.png" title="Klassik Radio" description="New app for a online radio" />
        <Thumbnail motive="./img2.png" title="RuhrNachrichten" description="News app for ruhr area" />
        <Thumbnail motive="./img3.png" title="Uhkey" description="Wuuud" />
      </m.div>
    </>
  )
}
