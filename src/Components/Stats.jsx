import { stats } from "../Constants";
import styles from "../style";
import { motion } from "framer-motion";

const Stats = () => (
  <motion.div
    className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap sm:mb-20 mb-6`}
  >
    {stats.map(({ id, value, title, x }) => (
      <motion.div
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
        initial={{ x: x }}
        key={id}
        className={`ss:flex-1 flex justify-start items-center m-3`}
      >
        <h4 className=" font-poppins font-semibold xs:text-[40px] text-30px xs:leading-[53px] leading-[43px] text-white">
          {value}
        </h4>
        <p className=" font-poppins font-normal xs:text-[20px] text-30px xs:leading-[26px] leading-[21px] text-white uppercase text-gradient ml-3">
          {title}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

export default Stats;
