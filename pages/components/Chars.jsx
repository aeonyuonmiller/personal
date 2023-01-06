import React from "react";
import { motion as m } from "framer-motion";

const Chars = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <m.h1
      style={{ overflow: "hidden",height:"auto", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {letters.map((letter, index) => (
        <m.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </m.span>
      ))}
    </m.h1>
  );
};

export default Chars;