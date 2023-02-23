import { Suspense, useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from "./components/Nav"
import { m } from "framer-motion"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stage, Loader } from '@react-three/drei'
// import { Chrome } from './components/Chrome'
import { Capsule } from './components/Capsule'


// import { PrismicText, PrismicRichText } from '@prismicio/react'
// import { SliceZone } from '@prismicio/react'
// import { components } from "@/slices/index"
// import { createClient } from '../prismicio'

// components
import Thumbnail from "./components/Thumbnail"
import ScrollDown from "./components/ScrollDown"

export default function Home() {
  const ref = useRef()
  const scrollDiv = useRef()
  const [children, setChildren] = useState([
    <Thumbnail key={1} url="/project" src="./kr-thumb.png" title="Klassik Radio" description="Online radio for classical music" />,
    <Thumbnail key={2} url="/project" src="./img2.png" title="RuhrNachrichten" description="News for the ruhr area" />,
    <Thumbnail key={3} url="/imprint" src="./parkjack.png" title="Parkjack" description="Find your parkingspot" />
  ])

  // infinite scroll
  useEffect(() => {
    scrollDiv.current.addEventListener("scroll", (e) => {
      if (scrollDiv.current.scrollHeight - scrollDiv.current.offsetHeight === scrollDiv.current.scrollTop) {
        setChildren(prev => [...prev, ...prev]);
      }
    })
  }, []);
  
  return (
    <>
      {/* <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=person"></script> */}
      <Head>
        <title>aym</title>
        <meta name="description" content="website of aeon yuon miller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav title="Designer / Frontend Dev" />

      <ScrollDown />

      <m.div className='scrollcontainer' ref={scrollDiv}
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition:{ ease: [.9, .62, .23, .99], duration: .8, delay: 1 }}}
        exit={{ y: "-50%", opacity: [1,0], transition: { ease: [.9, 0, .17, .99], duration: .8 }}}
      >    
        {children}
        {/* <Thumbnail url="/project" src="./kr-thumb.png" title="Klassik Radio" description="Online radio for classical music" />
        <Thumbnail url="/project" src="./img2.png" title="RuhrNachrichten" description="News for the ruhr area" />
        <Thumbnail url="/imprint" src="./parkjack.png" title="Parkjack" description="Find your parkingspot" /> */}
        {/* <SliceZone slices={page.data.slices} components={components} /> */}
      </m.div>

      <m.div drag className='chrome' initial={{opacity:0, y:20, x:"10%"}} animate={{opacity:1, y:0, x:0, transition: {duration:1}}} exit={{opacity:0, y:20, rotate: 16, scale: 1.6, transition: {duration:.4}}}>
        <Canvas frameloop="demand" camera={{ position: [-10, 180, 0], fov: 50 }}>
          {/* <color attach="background" args={[0,0,0,0]} /> */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10,30,20]} color="blue" intensity={10} />
          <Stage controls={ref} preset="soft" intensity={0.9}  contactShadow={false} shadows={false} environment="warehouse">
            <Suspense fallback={<span>loading model...</span>} />
            <Capsule />
          </Stage>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} ref={ref} />
          <Preload all />
        </Canvas>
        <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} />
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