import React from 'react'
import { motion as m } from "framer-motion"

import Head from 'next/head'
// import Image from 'next/image'

// components
import Nav from "./components/Nav"
import Layout from "./components/Layout"
import Anim from "./components/Anim"

// cms
// import { PrismicRichText } from '@prismicio/react'
// import { createClient } from '../prismicio'
// import { SliceZone } from '@prismicio/react'
// import { components } from '../slices'

// view
const about = ({ page }) => {
  // const { scrollYProgress } = scrollY();
  // const x = UseTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <>
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=person"></script>
      <Head>
        <title>/ about</title>
        <meta name="description" content="website of aeon yuon miller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <m.div
          className='portrait'
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1.025, opacity: 1, transition: { ease: [.64, .62, .23, .99], duration: .8 } }}
          exit={{ scale: 1, opacity: 0, transition: { ease: [.63, 0, .17, .99], duration: .8, delay: .2 } }}
        >
          <img alt="Portrait shot of Aeon Yuon Miller" src="./portrait.png" />
        </m.div>

        <div className='content'>
          {/* <h1><PrismicRichText field={page.data.title} /></h1> */}
          <h1><Anim>About</Anim></h1>
          
          <m.div initial={{ opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8, delay: .4 } }}
            exit={{ opacity: 0, y: 5, transition: { ease: "linear", duration: .4, delay: .3 } }}>
            {/* <PrismicRichText field={data.copy} /> */}
            <p className='intro'>My name is Andreas Y. Müller or aeonyuonmiller and I am a UI designer with over 10 years of experience working in agencies. My background is digital design.</p>
            <p>Also I work with code, specifically with Next.js (React) including Framer-Motion, Prismic and Snipcart.</p>
            <p>I have a passion for creating smooth animations and building consistent design systems that provide a seamless user experience. I pride myself on my ability to translate complex design concepts into intuitive and visually appealing interfaces.</p>
            <p>In my past work, I have successfully collaborated with cross-functional teams to deliver high-quality products on time and on budget. I am confident in my ability to adapt to new challenges and thrive in a fast-paced environment.</p>
            <p>I am excited to bring my skills and experience to new projects and help bring visions to life.</p>
          </m.div>
        </div>
      </Layout>
        
      <Nav url="/" title="/ About" gototitle="-> Work" />
      </>
  )
}

export default about

// // fetch content
// export async function getStaticProps() {
//   const client = createClient()
//   const page = await client.getSingle("about")
// // const page = await client.getByUID('UID', 'API ID')

//   return {
//     props: { page },
//   }
// }