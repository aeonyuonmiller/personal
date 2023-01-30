import { motion } from "framer-motion"

function Signature() {
  // const { scrollY } = useScroll()
  // const pathLength = useTransform(scrollY, [0, 200], [0, 1])
  const draw = {
    hidden: { pathLength: 0, filter: "blur(6px)" },
    animate: { pathLength: 1, filter: "blur(1px)", transition:{ duration: 1.4, type: "ease" }}
  }

  return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="250"
        fill="none"
        viewBox="0 0 771 236"
        strokeDasharray="0 1"
        initial="hidden"
        whileInView="animate"
      >
        <motion.path
          stroke="var(--tertiary)"
          strokeLinecap="round"
          strokeWidth="5"
          variants={draw}
          custom={1}
          d="M131.023 80.527c-57.434 0-121.139 26.872-125.889 91-1.75 23.613 13.841 23.917 34.333 27 46.218 6.953 89.287 4.871 131.111-18.222 38.425-21.216 62.62-61.104 78.445-100.667 9.212-23.029 18.083-46.18 31.889-66.889 10.524-15.786-8.443 23.204-10 26.111-21.493 40.12-41.223 89.224-43.778 135.223-.537 9.667-3.693 21.697 10.111 18 15.83-4.241 32.634-32.127 40.667-44.889 13.184-20.948 25.253-43.918 35.111-66.667 3.936-9.084 10.122-16.574 14-25.556 7.33-16.975 2.219-1.048-2 8-19.719 42.297-45.343 96.04-32 144.223 8.75 31.597 30.398-11.01 37-21.445 6.803-10.754 12.707-22.443 19.889-32.889 3.382-4.919 5.037-4.058 3.778 1.667-2.099 9.537-12.164 39.189 1.555 43 11.513 3.198 23.298-1.942 30.556-10.778 6.095-7.42 11.781-13.228 16.222-21.222 1.05-1.891 4.417-16.76 2.555-4.555-.92 6.035-16.23 46.329-10.666 49.111 20.692 10.346 57.752-37.314 64.111-51.445 5.685-12.633 9.903-24.733 13.444-38.111.461-1.739 3.982-11.803-.666-10.667-17.244 4.216-32.745 30.721-39.334 45.334-7.586 16.826-13.034 41.874-6 60 3.966 10.218 18.78 13.592 28 9.111 28.801-13.997 50.27-49.168 66.445-75.333 16.708-27.028 31.837-55.44 42.222-85.556 2.594-7.523 1.537-8.16-6.222-2.556-28.019 20.236-46.298 54.836-52.334 88.334-4.008 22.248-3.158 48.469 17.112 62.778 12.769 9.013 28.775 4.236 40-4.445 25.976-20.089 38.62-45.494 49.777-75.778 1.965-5.332 13.099-25.99.667-24.777-22.256 2.171-44.755 20.289-56.444 38.444-9.665 15.011-10.593 39.744 5.888 51 38.034 25.974 70.579-3.318 105.112-17.444 13.491-5.52 11.261 13.184 11.333 21.777.026 3.126-1.882 31.541-2 16.889-.312-38.661 0-77.337 0-116 0-1.846 1.743-27.113-2.889-20.889-28.631 38.472 76.024 33.526 92.889 29.778"
        />
        <motion.path
          stroke="var(--tertiary)"
          strokeLinecap="round"
          strokeWidth="5"
          variants={draw}
          custom={2}
          d="M151.023 126.527c8.48-6.938 24.634-6.919 34.889-7.555 79.14-4.912 159.78 3.972 238.333 12.222 44.947 4.72 89.678 11.033 134.778 14.222 5.355.379 26.219 5.987 24-2.889"
        />
    </motion.svg>
  );
}

export default Signature;