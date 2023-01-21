import { motion as m } from "framer-motion"

function Icon() {
  
const group = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition:{ staggerChildren: 0.3, }}
}

const item = {
  hide: { scale: 0.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 }}
}
  return (
    <m.svg
      variants={group}
      initial="hide"
      animate="show"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      fill="none"
      viewBox="0 0 742 300"
      >
        <m.g variants={item}>
        <rect
            width="80"
            height="80"
            x="0.928"
            y="83.995"
            fill="#fff"
            rx="40"   
        ></rect></m.g>
        <m.g variants={item}>
        <rect     
            width="160"
            height="80"
            x="86.183"
            y="0.74"
            fill="#fff"
            rx="40"
            transform="rotate(45 86.183 .74)"
              ></rect></m.g>
        <m.g variants={item}>
        <rect
            width="160"
            height="80"
            x="212.497"
            y="2.995"
            fill="#fff"
            rx="40"
            transform="rotate(45 212.497 2.995)"
              ></rect></m.g>
        <m.g variants={item}>
        <rect
            width="160"
            height="80"
            fill="#fff"
            rx="40"
            transform="scale(-1 1) rotate(45 -283 -383.293)"
        ></rect></m.g>
        <m.g variants={item}>
        <rect
            width="160"
            height="80"
            x="402.497"
            y="11.995"
            fill="#fff"
            rx="40"
            transform="rotate(45 402.497 11.995)"
        ></rect></m.g>
        <m.g variants={item}>
        <rect
            width="160"
            height="80"
            x="515.69"
            y="12.188"
            fill="#fff"
            rx="40"
            transform="rotate(45 515.69 12.188)"
        ></rect></m.g>
        <m.g variants={item}>
        <rect
            width="160"
            height="80"
            x="628.759"
            y="12.257"
            fill="#fff"
            rx="40"
            transform="rotate(45 628.759 12.257)"
        ></rect></m.g>
    </m.svg>
  );
}

export default Icon;