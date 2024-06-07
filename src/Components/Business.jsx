import styles, { layout } from "../style";
import { features } from "../Constants";
import Button from "./Button";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index, x }) => (
  <motion.div
    transition={{ duration: 1 }}
    whileInView={{ x: 0 }}
    initial={{ x: x }}
    className={`flex flex-row p-6 rounded-[20px]  ${
      index !== features.length - 1 ? "mb-4" : "mb-0"
    } cursor-pointer  mb-feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img className="w-[50%] h-[50%] object-contain" src={icon} alt="" />
    </div>
    <div className="flex flex-col ml-3 flex-1">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}{" "}
      </p>
    </div>
  </motion.div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section} ${styles.paddingX} `}>
      <motion.div
        className={`${layout.sectionInfo}`}
        transition={{ duration: 1 }}
        whileInView={{ x: 0 }}
        initial={{ x: -200 }}
      >
        <h2 className={`${styles.heading2} max-w-[550px]`}>
          You do the business, we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </motion.div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
