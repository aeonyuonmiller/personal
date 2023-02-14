import { m } from "framer-motion"

function CloseIcon() {
    const parent = {
        hidden:{ rotate: -160 },
        animate:{ rotate: 0, transition:{type: "spring" }}
    }

    const draw = {
      hidden: { pathLength: 0, filter: "blur(18px)", strokeWidth: 20 },
      animate: { pathLength: 1, filter: "blur(0)", strokeWidth: 4, transition: { duration: .8, type: "easeOut" }},
      exit: { pathLength: 0, strokeWidth: 20, transition: { duration: .8, type: "easeOut" }},
    }
    const draw2 = {
      hidden: { opacity: 0, pathLength: 0, filter: "blur(18px)", strokeWidth: 20 },
      animate: { opacity: 1, pathLength: 1, filter: "blur(0)", strokeWidth: 4, transition: { duration: .8, delay: .3, type: "easeOut" }},
      exit: { opacity: 0, pathLength: 0, strokeWidth: 20, transition: { duration: .8, type: "easeOut" }},
    }

  return (
    <m.svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        fill="none"
        viewBox="0 0 198 200"
        strokeDasharray="0 1"
        variants={parent}
        initial="hidden"
        whileInView="animate"
        exit="exit"
    >
      {/* <path fill="#E5E5E5" d="M0 0H198V200H0z"></path> */}
      <g>
        {/* <rect width="160" height="160" x="19" y="20" fill="#ffffff35" rx="80"></rect> */}
        <g stroke="#fff" strokeLinecap="round" strokeWidth="6">
          <m.path variants={draw} d="M69.802 129.906l60.104-60.105"></m.path>
          <m.path variants={draw2} d="M129.552 129.552L69.448 69.448"></m.path>
        </g>
      </g>
    </m.svg>
  );
}

export default CloseIcon;