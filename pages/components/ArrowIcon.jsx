import { motion as m } from "framer-motion"

function Icon() {

const group = {
  hide: { opacity: 0, transition:{ staggerChildren: 0.3, } },
  show: { opacity: 1, transition:{ staggerChildren: 0.3, }}
}

const item = {
  hide: { scale: 0.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 }}
}
  return (
      <m.svg
        variants={group}
        // viewport={{ amount: 0.4, margin: "150px", once: false }}
        viewport={{ amount: 0.4, once: false }}
        initial="hide"
        whileInView="show"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        fill="none"
        viewBox="0 0 330 330"
        >
      <m.g variants={item}>
      <rect
        width="280.416"
        height="80"
        fill="#FFf"
        rx="40"
        transform="scale(-1 1) rotate(-45 139.3 472.868)"
          ></rect></m.g>
          <m.g variants={item}>
      <rect
        width="241"
        height="80"
        fill="#FFf"
        rx="40"
        transform="scale(1 -1) rotate(90 277 -.432)"
          ></rect></m.g>
          <m.g variants={item}>
      <rect
        width="241"
        height="80"
        fill="#FFf"
        rx="40"
        transform="matrix(1 0 0 -1 35.568 277.432)"
      ></rect></m.g>
    </m.svg>
  );
}

export default Icon;