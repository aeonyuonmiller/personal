import { motion as m, AnimatePresence } from "framer-motion"
import Head from 'next/head'

// components
import Anim from "./components/Anim"
import Nav from "./components/Nav"
import Parallax from "./components/Parallax"

const project = () => {

    return (
    <>
        <Head>
        <title>/ project</title>
        <meta name="description" content="project description" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            
        <AnimatePresence>    
          <m.div className="hero" layoutId="./aloner-script.png" style={{ background: "green" }}>
            <Anim>Project Name</Anim>
            <Parallax>
                <m.img initial={{ scale: 1.05 }} animate={{ scale: 1, transition: { easing: "ease", duration: 3 } }} src="./aloner-script.png" />
            </Parallax>
          </m.div>
        </AnimatePresence>
            
        <div className='content2'>
          {/* <h1><PrismicRichText field={page.data.title} /></h1> */}          
          <m.div initial={{ opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8, delay: .4 } }}
            exit={{ opacity: 0, y: 5, transition: { ease: "linear", duration: .4, delay: .3 } }}>
            {/* <PrismicRichText field={data.copy} /> */}
            <p className='intro'>My name is Andreas Y. Müller or aeonyuonmiller and I am a UI designer with over 10 years of experience.</p>
            <p>Also I work with code, specifically with React (Next.js), Framer-Motion, Prismic and Snipcart.</p>
          </m.div>
        </div>
            
        <Nav url="/" title="/ Project" gototitle="-> Back" />
    </>
  )
}

export default project