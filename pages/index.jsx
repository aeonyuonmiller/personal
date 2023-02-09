import { Suspense, useRef } from 'react'
import Head from 'next/head'
import Nav from "./components/Nav"
import { m } from "framer-motion"
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload, Stage } from '@react-three/drei'
import { Chrome } from './components/Chrome'

// import { PrismicText, PrismicRichText } from '@prismicio/react'
// import { SliceZone } from '@prismicio/react'
// import { components } from "@/slices/index"
// import { createClient } from '../prismicio'

// components
import Thumbnail from "./components/Thumbnail"
import ScrollDown from "./components/ScrollDown"

export default function Home() {
  const ref = useRef()
  
  return (
    <>
      {/* <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=person"></script> */}
      <Head>
        <title>aym</title>
        <meta name="description" content="website of aeon yuon miller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <m.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0, transition: {duration:1}}} exit={{opacity:0, y:-20, transition: {duration:.4}}} className='chrome'>
          <Canvas frameloop="demand" camera={{ position: [-10, 180, 0], fov: 50 }}>
            <Suspense fallback={<span>loading model...</span>}/>
            {/* <color attach="background" args={[0,0,0,0]} /> */}
              <ambientLight intensity={0.5} />
              <pointLight position={[10,20,10]} color="pink" intensity={6} />
              <Stage controls={ref} preset="soft" intensity={0.09}  contactShadow={true} shadows={true} environment="studio">
                <Chrome />
              </Stage>
              <OrbitControls ref={ref} autoRotate scale={.9} />
            <Preload all />
          </Canvas>
      </m.div>

      {/* <m.video
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 }}}
        exit={{ scale: 0.95, opacity: 0, transition:{ ease: [.63, 0, .17, .99], duration: .8, delay: .4 }}}
        className='chrome'
        width="700px"
        height="auto"
        preload="auto"
        autoPlay
        loop>
          <source src="/chromed2-s.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </m.video> */}

      <Nav title="Work" />

      <ScrollDown />

      <m.div className='scrollcontainer'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 }}}
        exit={{ y: 50, opacity: 0, transition: { ease: [.63, 0, .17, .99], duration: .8 }}}
      >    
        <Thumbnail url="/project" src="./aloner-script.png" title="Klassik Radio" description="Online radio for classical music" />
        <Thumbnail url="/project" src="./img2.png" title="RuhrNachrichten" description="News for the ruhr area" />
        <Thumbnail url="/imprint" src="./img3.png" title="Parkjackr" description="Find your parkingspot" />
        {/* <SliceZone slices={page.data.slices} components={components} /> */}
      </m.div>
    </>
  )
}

// fetch content
// export async function getStaticProps() {
//   const client = createClient()
//   const page = await client.getSingle("homepage")

//   return {
//     props: { page },
//   }
// }