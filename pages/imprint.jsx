import { m } from "framer-motion"
import Head from 'next/head'

// components
import Nav from "./components/Nav"
import Anim from "./components/Anim"
import Scroll1 from "./components/Scroll1"
import Fade from "./components/Fade"

const imprint = () => {
  
  return (
    <>  
      <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=person"></script>

      <Head>
        <title>/ imprint</title>
        <meta name="description" content="website of aeon yuon miller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='content'>
        <Scroll1><Anim>Imprint</Anim></Scroll1>
        <m.div initial={{ opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8, delay: .4 } }}
          exit={{ opacity: 0, y: 5, transition: { ease: "linear", duration: .4, delay: .3 } }}>
          <h5>This website is owned, operated, designed and developed by</h5>
          <p className='intro'>Andreas Y. Müller<br />
          Stuttgarter Strasse 41<br />
          aym1@mail.com</p>
          <br />
          <p>Andreas Y. Müller or aeonyuonmiller is not responsible for the content of external websites.</p>
          <Fade>Andreas Y. Müller or aeonyuonmiller does not endorse or assume any liability for the content of external websites.</Fade>
          <Fade>The content of this website is for general information purposes only and does not constitute professional advice. Andreas Y. Müller or aeonyuonmiller  makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</Fade>
          <Fade>In no event will Andreas Y. Müller be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</Fade>
          <Fade>Through this website you are able to link to other websites which are not under the control of Andreas Y. Müller or aeonyuonmiller. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</Fade>
          <Fade>Andreas Y. Müller or aeonyuonmiller reserves the right to change the content of this website at any time and without notice.</Fade>
          <Fade><h5>&copy; {new Date().getFullYear()}</h5></Fade>
        </m.div>
      </div>

      <Nav url="/" title="Imprint" />
    </>
  )
}

export default imprint