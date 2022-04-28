import { motion } from "framer-motion";
import Layout from './components/Layout'

const work = () => {
  return (
      <>
        <Layout>
            <h2>Work</h2>
        </Layout>
          
        <motion.div className='scroller'>
            <div className='scroller-item'>hehe</div>
            <div className='scroller-item'>hehe</div>
            <div className='scroller-item'>hehe</div>  
        </motion.div>
      </>
  )
}

export default work