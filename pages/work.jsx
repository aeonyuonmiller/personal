import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CloseButton from "./components/CloseButton";
import Layout from "./components/Layout";

const variants = {
    intro: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { ease:"easeOut", duration: 2, staggerChildren: 0.3 }},
    exit: { opacity: 0, y: -50, transition: { ease:"easeIn", duration: 0.6 }}
};

const items = {
    intro: { opacity:0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
}

const work = () => {

    return (
      <>
        <CloseButton>Close</CloseButton>   
            
        <Layout>
            <h2 className="fixed">Work</h2>
        </Layout>
                      
        <motion.div variants={variants} initial="intro" animate="animate" exit="exit" className='scroller'>
            <motion.div variants={items} className='scroller-item'>Discogs Redesign</motion.div>
            <motion.div variants={items} className='scroller-item'>Klassik Radio</motion.div>
            <motion.div variants={items} className='scroller-item'>Studio Plum</motion.div>
            <motion.div variants={items} className='scroller-item'>Suzuki</motion.div>    
        </motion.div>
      </>
  )
}

export default work