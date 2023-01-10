import React from 'react'
import { motion as m } from "framer-motion"
import Head from 'next/head'
import Image from 'next/image'

// components
import Nav from "./components/Nav"
import Layout from "./components/Layout"

// cms
import { PrismicRichText } from '@prismicio/react'
import { createClient } from '../prismicio'
// import { SliceZone } from '@prismicio/react'
// import { components } from '../slices'

// view
const about = ({ page }) => {
  return (
    <>
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=aeonyuonmiller"></script>
      <Head>
        <title>aym / about</title>
        <meta name="description" content="website of aeon yuon miller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <m.div
          drag dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1.025, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 } }}
              exit={{ scale: 1, opacity: 0, transition:{ ease: [.63, 0, .17, .99], duration: .8, delay: .2 }}}
              className='portrait'
        >
          <img alt="Portrait shot of Aeon Yuon Miller" src="./portrait.png"/>
        </m.div>

        <div className='content'>
          <h1><PrismicRichText field={page.title} /></h1>
          
          <m.p initial={{ opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8, delay: .4 } }}
            exit={{ opacity: 0, y: 10, transition: { ease: [.63, 0, .17, .99], duration: .6 } }}>
            {/* <PrismicRichText field={data.copy} /> */}
            okie dokie
          </m.p>
        </div>
      </Layout>
        
      <Nav url="/" title="/ About" gototitle="-> Works" />
      </>
  )
}

export default about

// fetch content
export async function getStaticProps() {
  const client = createClient()
  const page = await client.getSingle("about")
// const page = await client.getByUID('UID', 'API ID')

  return {
    props: { page },
  }
}