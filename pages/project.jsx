import { m } from "framer-motion"
import Head from 'next/head'

// components
import Anim from "./components/Anim"
import Nav from "./components/Nav"
import Parallax from "./components/Parallax"
import Fade from "./components/Fade"
import BigImage from "./components/BigImage"
// import Video from "./components/Video"
import Close from "./components/Close"
import FooterProject from "./components/FooterProject"

const project = () => {

  const heroVariant = {
    hide: { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    show: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', transition:{ ease:"easeOut", duration: .6, delay: .1 }},
    exit: { y: "-111%", skewY: 4, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', transition:{ ease:"easeInOut", duration: 1.2 } }
  }

    return (
    <>
        <Head>
        <title>Klassik Radio</title>
        <meta name="description" content="Klassik in höchster Qualität" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
            
          <m.div className="hero" variants={heroVariant} initial="hide" animate="show" exit="exit" style={{ background: "#1d1d1d" }}>
            <Anim>Klassik Radio</Anim>
            <Parallax>
              <m.img
                initial={{ scale: 1.08 }}
                exit={{ y: "40%", transition: { duration: 1.1 }}}
                animate={{ scale: 1, transition: { easing: "circOut", duration: 2 } }}
                src="./kr-thumb.png" />
            </Parallax>
        </m.div>
        
        <Close />
            
        <m.div className='content2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8, delay: .4 } }}
            exit={{ opacity: 0, y: 5, transition: { ease: "linear", duration: .4, delay: .3 } }}>
          {/* <h1><PrismicRichText field={page.data.title} /></h1> */}          
          
            {/* <PrismicRichText field={data.copy} /> */}
            <h5>Klassik in höchster Qualität</h5>
            <p className='intro'>Klassik Radio ist eine Streaming-App mit der besten Auswahl an klassischer Musik sowie weiteren Musikstilen.</p>
            <h5>Aufgaben</h5>
            <Fade>Marktforschung, Nutzer-Interviews führen und auswerten, komplettes Redesign der App (Design-System) und native Entwicklung (iOS & Android).</Fade>
            <Fade>Das App-Framework <i>Cordova</i> erfüllt nicht mehr die Ziele der Unternehmensstrategie.</Fade>
            <Fade><BigImage src="/kr000.png" alt="MaxiPlayer" marginBottom={30} /></Fade>
            <h5>Lösungen</h5>
          <Fade>Anhand einer umfassenden Benchmark-Analyse sowie User-Interviews haben wir herausgefunden, das die Nutzer*innen viele Funktionen nicht benutzen oder kennen (z.B. Mixer/Equaliser).</Fade>
          <Fade>Unverständliche Icons konnten wir anhand von HighFidelity Prototype-Tests mit bestehenden Nutzer*innen ausfindig machen können.</Fade>
          <Fade>Musik soll wie im Radio zusammen gemischt werden (Crossfade) und im Alltag oder zu besonderen Events (zum gemeinsamen Kochen mit Freunden oder dem romantischen Dinner) ein ungestörtes Hörerlebnis bieten.</Fade>
            <Fade><BigImage src="/kr001.png" alt="Main views - homepage, maxiplayer, equaliser & contextmenu" marginBottom={30} /></Fade>
          {/* <Video src="../chromed2-s.mp4"/> */}
            <h5>Zielgruppen</h5>
            <Fade>Hauptnutzer sind Senioren (50-90 Jahre) – die gutlesbare Schrift, große Klickflächen und eine individuelle Anpassung an ihre Ohren (z.B. Hörgeräte) durch den Equaliser wünschen und nicht auf ein Premium Feel verzichten wollen.</Fade>
            <Fade>Unter den Klassik-Fans fanden sich auch jüngere Nutzer*innen sowie Familien die andere Kanäle (Themenspezifisch wie z.B. Marvel) des Radios mögen.</Fade>
        <FooterProject />
        </m.div>

            
        <Nav title=""/>
    </>
  )
}

export default project