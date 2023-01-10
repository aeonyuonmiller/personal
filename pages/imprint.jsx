import React from 'react'
import Head from 'next/head'

const imprint = () => {
  return (
    <>
      <Head>
        <title>/ imprint</title>
        <meta name="description" content="website of aeon yuon miller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='content'>
        <h1>Imprint</h1>
        <h5>This website is owned and operated by</h5>
      <p>Andreas Y. Müller<br />
        Stuttgarter Strasse 41<br />
      aym1@mail.com</p>
      <br />
        <p>Andreas Y. Müller or aeonyuonmiller is not responsible for the content of external websites.</p>
        <p>Andreas Y. Müller or aeonyuonmiller does not endorse or assume any liability for the content of external websites.</p>
        <p>The content of this website is for general information purposes only and does not constitute professional advice. Andreas Y. Müller or aeonyuonmiller  makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
        <p>In no event will Andreas Y. Müller be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
        <p>Through this website you are able to link to other websites which are not under the control of Andreas Y. Müller or aeonyuonmiller. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
        <p>Andreas Y. Müller or aeonyuonmiller reserves the right to change the content of this website at any time and without notice.</p>
        <h5>&copy; 2023</h5>
      </div>
    </>
  )
}

export default imprint