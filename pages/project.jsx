import { motion as m } from "framer-motion"
import Head from 'next/head'

// components
import Anim from "./components/Anim"
import Nav from "./components/Nav"
import Parallax from "./components/Parallax"
import Fade from "./components/Fade"
import BigImage from "./components/BigImage"
// import Video from "./components/Video"
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
              <m.img
                initial={{ scale: 1.08 }}
                exit={{ y: "40%", transition: { duration: 1.1 }}}
                animate={{ scale: 1, transition: { easing: "circOut", duration: 2 } }}
                src="./aloner-script.png" />
            </Parallax>
        </m.div>
        
        <Close />
            
        <m.div className='content2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8, delay: .4 } }}
            exit={{ opacity: 0, y: 5, transition: { ease: "linear", duration: .4, delay: .3 } }}>
          {/* <h1><PrismicRichText field={page.data.title} /></h1> */}          
          
            {/* <PrismicRichText field={data.copy} /> */}
            <h5>Einleitung</h5>
            <p className='intro'>Klassik Radio ist eine Streaming-App mit der besten Auswahl an klassischer Musik und weiteren Musikrichtungen.</p>
            <h5>Aufgaben</h5>
            <p>Marktforschung, Nutzer-Interviews führen und auswerten, komplettes Redesign der App mittels Design-System und native Entwicklung (iOS & Android).</p>
            <p>Das App-Framework <i>Cordova</i> erfüllt nicht mehr die Ziele der Unternehmensstrategie.</p>
            <BigImage src="/img1.png" alt="okokok" marginBottom={160} />
            <h5>Lösungen</h5>
          <Fade>Anhand einer umfassenden Benchmark-Analyse sowie User-Interviews haben wir herausgefunden, das die Nutzer*innen viele Funktionen nicht benutzen oder kennen.</Fade>
          <Fade>Unverständliche Icons konnten wir anhand von HighFidelity Prototype-Tests mit bestehenden Nutzer*innen ausfindig machen können.</Fade>
          <Fade>Musik soll wie im Radio zusammen gemischt werden (Crossfade) und im Alltag oder zu besonderen Events (zum gemeinsamen Kochen mit Freunden oder dem romantischen Dinner) ein ungestörtes Hörerlebnis bieten.</Fade>
            <BigImage src="/img2.png" alt="okokookokkkkk" marginBottom={160} />
          {/* <Video src="../chromed2-s.mp4"/> */}
            <h5>Zielgruppen</h5>
            <Fade>Hauptnutzer sind Senioren (50-90 Jahre) – die gutlesbare Schrift, große Klickflächen und eine individuelle Anpassung an ihre Ohren (z.B. Hörgeräte) durch den Equaliser wünschen und nicht auf ein Premium Feel verzichten wollen.</Fade>
            <Fade>Unter den Klassik-Fans fanden sich auch jüngere Nutzer*innen sowie Familien die andere Kanäle (Themenspezifisch wie z.B. Marvel) des Radios mögen.</Fade>
        </m.div>
            
        <Nav title=""/>
    </>
  )
}

export default project