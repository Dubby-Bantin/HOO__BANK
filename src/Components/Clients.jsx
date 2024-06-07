import { clients } from "../Constants";
import styles from "../style";
import { animate, motion } from "framer-motion";

const imageVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 ${styles.paddingX}`}>
    <div className={`${styles.flexCenter} w-full sm:flex-row flex-col`}>
      {clients.map(({ id, logo, duration }) => (
        <motion.div
          variants={imageVariants(duration)}
          initial="initial"
          animate="animate"
          key={id}
          className={`${styles.flexCenter} flex-1  w-[100px]`}
        >
          <img
            src={logo}
            alt="client"
            className="sm:w-[192px] w-[100px] mb-9"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Clients;
