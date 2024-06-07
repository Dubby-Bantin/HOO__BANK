import Button from "./Button";
import styles, { layout } from "../style";
import { card } from "../assets";
import { motion } from "framer-motion";
const CardDeal = () => (
  <section className={`${layout.section} ${styles.paddingX}`}>
    <motion.div
      className={`${layout.sectionInfo}`}
      transition={{ duration: 1 }}
      whileInView={{ x: 0 }}
      initial={{ x: -200 }}
    >
      <h2
        className={`${styles.heading2} max-w-[550px] ss:text-start text-center`}
      >
        Find a better card deal in a few steps
      </h2>
      <p
        className={`${styles.paragraph} max-w-[480px] mt-5 ss:text-start text-center`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        atque deleniti delectus quibusdam natus ut eos sint quam praesentium
        quas excepturi ratione eum obcaecati autem voluptas, quis temporibus
        velit odio!
      </p>
      <Button styles="mt-10" />
    </motion.div>
    <motion.div
      className={`${layout.sectionImg} relative`}
      transition={{ duration: 1 }}
      whileInView={{ x: 0 }}
      initial={{ x: 200 }}
    >
      <img src={card} alt="card" className="" />
      <div className="absolute z-[3] top-0 w-[50%] h-[50%] rounded-full blue__gradient right-0" />
    </motion.div>
  </section>
);

export default CardDeal;
