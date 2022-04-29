// import { useAnimation, motion } from "framer-motion";
import { motion } from "framer-motion";
import { inView } from "react-intersection-observer";
import Layout from './components/Layout'

const variants = {
    intro: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { ease:"easeOut", duration: 0.6, staggerChildren: 0.3 }},
    exit: { opacity: 0, y: -50, transition: { ease:"easeIn", duration: 0.4 }}
};

const items = {
    intro: { opacity:0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 }},
    exit: { opacity: 0, y: -50, transition:{ ease:"easeIn", duration: 0.6 }}
}

const work = () => {
    // const controls = useAnimation();
    // const [ref, inView] = useInView({ threshold: 0.2 });

    return (
      <>
        <Layout>
            <h2>Work</h2>
        </Layout>
          
        <motion.div variants={variants} initial="intro" animate="animate" exit="exit" className='scroller'>
            <motion.div variants={items} className='scroller-item'>hehe</motion.div>
            <motion.div variants={items} className='scroller-item'>hehe</motion.div>
            <motion.div variants={items} className='scroller-item'>hehe</motion.div>  
        </motion.div>
      </>
  )
}

export default work