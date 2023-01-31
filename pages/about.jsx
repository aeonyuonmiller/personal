import React from 'react'
import { motion as m } from "framer-motion"
import Head from 'next/head'
// import Image from 'next/image'

// components
import Nav from "./components/Nav"
import Layout from "./components/Layout"
import Anim from "./components/Anim"
import Scroll1 from "./components/Scroll1"
import Fade from "./components/Fade"
import Signature from "./components/Signature"

import portrait from "../public/portrait.png"

// cms
// import { PrismicRichText } from '@prismicio/react'
// import { createClient } from '../prismicio'
// import { SliceZone } from '@prismicio/react'
// import { components } from '../slices'

// view
const About = ({ page }) => {

  return (
    <>
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=person"></script>
      <Head>
        <title>/ about</title>
        <meta name="description" content="portfolio of aeon yuon miller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        
        <m.div
          className='portrait'
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1.025, opacity: 1, y:0, transition: { ease: [.64, .62, .23, .99], duration: .8 } }}
          exit={{ scale: 1, opacity: 0, transition: { ease: [.63, 0, .17, .99], duration: .8, delay: .2 } }}>
          {/* <Image priority width="600" height="700" alt="Portrait shot of Aeon Yuon Miller" src={portrait} />*/}
          <img loading="lazy" role="presentation" alt="Portrait shot of Aeon Yuon Miller" src="/portrait.png" /> 
        </m.div>

        <div className='content'>
          {/* <h1><PrismicRichText field={page.data.title} /></h1> */}
          <Scroll1><Anim>About</Anim></Scroll1>
          
          <m.div initial={{ opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8, delay: .4 } }}
            exit={{ opacity: 0, y: 5, transition: { ease: "linear", duration: .4, delay: .3 } }}>
            {/* <PrismicRichText field={data.copy} /> */}
            <p className='intro'>My name is Andreas Y. Müller or aeonyuonmiller and I am a UI designer with over 10 years of experience.</p>
            <Fade>Currently getting into ThreeJS (R3F & Drei).</Fade>
            <Fade>I work with <strong>Figma</strong> for conception and design and with code – specifically with <strong>React</strong> (Next.js), <strong>Framer-Motion</strong>, <strong>Prismic</strong> and <strong>Snipcart</strong>.</Fade>
            <Fade>I have a passion for creating smooth interactive products and building consistent design-systems that provide a seamless user experience. I pride myself on my ability to translate complex design concepts into intuitive and visually appealing interfaces.</Fade>
            <Fade>In the past, I have successfully collaborated with cross-functional teams to deliver high-quality products. Through my experience in agencies i am confident in my ability to adapt to new challenges and thrive in a fast-paced environment.</Fade>
            <Fade>I am excited to bring my skills and experience to new projects and help bring visions to life.</Fade>
            <Signature />
          </m.div>
          </div>
      </Layout>
        
      <Nav title="About" />
      </>
  )
}

export default About

// // fetch content
// export async function getStaticProps() {
//   const client = createClient()
//   const page = await client.getSingle("about")
// // const page = await client.getByUID('UID', 'API ID')

//   return {
//     props: { page },
//   }
// }