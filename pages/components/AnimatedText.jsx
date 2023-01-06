import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text }) => {
// splitting text into letters
  const letters = Array.from(text);

// Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

// Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.h1 variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;