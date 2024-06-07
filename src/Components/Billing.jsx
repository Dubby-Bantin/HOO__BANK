import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Billing = () => (
  <section className={`${layout.sectionReverse} ${styles.paddingX}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <motion.img
        transition={{ duration: 1 }}
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        className="w-[100%] h-[100%] relative z-[5] object-contain"
        src={bill}
        alt="billing"
      />
      <div className="absolute z-[3] top-0 w-[50%] h-[50%] rounded-full blue__gradient -left-1/2" />
      <div className="absolute z-[3] top-0 w-[30%] h-[30%] rounded-full pink__gradient -left-1/2" />
      <div className="absolute z-[3] bottom-0 w-[50%] h-[50%] rounded-full white__gradient -left-1/2" />
    </div>
    <motion.div
      className={`${layout.sectionInfo}`}
      transition={{ duration: 1 }}
      initial={{ x: 200 }}
      whileInView={{ x: 0 }}
    >
      <h2
        className={`${styles.heading2} sm:ml-24 sm:w-1/2 text-center ss:text-start`}
      >
        Lorem ipsum, dolor sit amet.
      </h2>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 sm:ml-24 ml-0 ss:text-start text-center`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, harum
        nam commodi fuga recusandae, quia excepturi voluptatem incidunt,
        exercitationem maxime aspernatur ratione. Nobis aperiam culpa pariatur
        aliquid quam eveniet quae!
      </p>
      <div className="flex flex-row sm:mt-10 mt-6 ss:ml-24 ml-20 gap-6">
        <img
          src={apple}
          alt="google play"
          className="w-[128px] h-[42px] object-contain  cursor-pointer"
        />
        <img
          src={google}
          alt="google play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </motion.div>
  </section>
);

export default Billing;
