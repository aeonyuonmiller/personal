import { m } from "framer-motion"

function Icon({ color = "white" }) {
    const draw1 = {
        hide: { display: "none", pathLength: 0, filter: "blur(6px)" },
        show: { display: "visible", pathLength: 1, filter: "blur(0px)", transition:{ duration: .3, type: "easeOut", delay: 1.9 }}
    }
    const draw2 = {
        hide: { display: "none", pathLength: 0, filter: "blur(6px)" },
        show: { display: "visible", pathLength: 1, filter: "blur(0px)", transition:{ duration: .3, type: "easeIn", delay: 1.8 }}
    }
    
  return (
    <m.svg
    style={{display:"inline", translateY: "-0.5px", marginLeft: "2px" }}
    initial="hide"
    whileInView="show"
    viewport={{ amount: 0.4, once: false }}
    xmlns="http://www.w3.org/2000/svg"
    // width="50"
    height="11"
    fill="none"
    viewBox="0 0 50 50"
    >
    <m.path
        variants={draw1}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="12"
        d="M17.5 32l15-15"
    />
    <m.path
      variants={draw2}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="11"
        d="M12 12h25.5v25.5"
    />
    </m.svg>
  );
}

export default Icon;