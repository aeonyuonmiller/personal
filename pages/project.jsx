import { motion as m } from "framer-motion"
import Head from 'next/head'

// components
import Anim from "./components/Anim"
import Nav from "./components/Nav"
import Parallax from "./components/Parallax"
import Fade from "./components/Fade"
import BigImage from "./components/BigImage"
import Video from "./components/Video"
import Close from "./components/Close"

const project = () => {

  const heroVariant = {
    hide: { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    show: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', transition:{ ease:"easeOut", duration: .6, delay: .1 }},
    exit: { y: "-111%", skewY: 4, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', transition:{ ease:"easeInOut", duration: 1.2 } }
  }

    return (
    <>
        <Head>
        <title>/ project</title>
        <meta name="description" content="project description" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            
          <m.div className="hero" variants={heroVariant} initial="hide" animate="show" exit="exit" style={{ background: "green" }}>
            <Anim>Klassik Radio</Anim>
            <Parallax>
                <m.img initial={{ scale: 1.08 }} exit={{ y: "40%", transition:{ duration: 1.1 }}} animate={{ scale: 1, transition: { easing: "circOut", duration: 2 }}} src="./aloner-script.png" />
            </Parallax>
        </m.div>
        
        <Close />
            
        <div className='content2'>
          {/* <h1><PrismicRichText field={page.data.title} /></h1> */}          
          <m.div initial={{ opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8, delay: .4 } }}
            exit={{ opacity: 0, y: 5, transition: { ease: "linear", duration: .4, delay: .3 } }}>
            {/* <PrismicRichText field={data.copy} /> */}
            <h5>Kontext</h5>
            <p className='intro'>Klassik Radio ist eine Streaming-App mit der besten Auswahl an klassischer Musik und weiteren Musikrichtungen.</p>
            <h5>Aufgabe</h5>
            <p>Hauptnutzer sind Senioren, die größere Schrift, große Klickflächen und Anpassung an ihre Ohren durch den Equaliser bevorzugen.</p>
            <BigImage />
            <h5>Lösung</h5>
            <Fade>Hauptnutzer sind Senioren, die größere Schrift, große Klickflächen und Anpassung an ihre Ohren durch den Equaliser bevorzugen.</Fade>
            <Video src="../chromed2-s.mp4"/>
            <Fade>Hauptnutzer sind Senioren, die größere Schrift, große Klickflächen und Anpassung an ihre Ohren durch den Equaliser bevorzugen.</Fade>
            <Fade>Hauptnutzer sind Senioren, die größere Schrift, große Klickflächen und Anpassung an ihre Ohren durch den Equaliser bevorzugen.</Fade>
            <Fade>Hauptnutzer sind Senioren, die größere Schrift, große Klickflächen und Anpassung an ihre Ohren durch den Equaliser bevorzugen.</Fade>
            <Fade>Hauptnutzer sind Senioren, die größere Schrift, große Klickflächen und Anpassung an ihre Ohren durch den Equaliser bevorzugen.</Fade>
            <Fade>Hauptnutzer sind Senioren, die größere Schrift, große Klickflächen und Anpassung an ihre Ohren durch den Equaliser bevorzugen.</Fade>
            <Fade>Hauptnutzer sind Senioren, die größere Schrift, große Klickflächen und Anpassung an ihre Ohren durch den Equaliser bevorzugen.</Fade>

          </m.div>
        </div>
            
        <Nav title="Project"/>
    </>
  )
}

export default project