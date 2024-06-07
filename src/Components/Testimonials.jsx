import { feedbacks } from "../Constants";
import styles from "../style";
import FeedbackCard from "./FeedBackCard";

const Testimonials = () => (
  <section
    className={`${styles.paddingY} ${styles.flexCenter} ${styles.paddingX} flex-col relative `}
  >
    <div className="absolute z-0 w-[60%] h-[60%] rounded-full -left-[50%] blue__gradient" />
    <div className={`w-full flex justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ${styles.paddingX} ${styles.flexCenter}`}>
      <h1 className={` ${styles.heading2}  `}>
        What people are saying about us
      </h1>
      <p className={` ${styles.paragraph} w-[100%]`}>
        Everything you need to accept card payments and grow your bussiness
        anywhere on the planet.
      </p>
    </div>
    <div className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ${styles.paddingX}`}>
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} {...feedback} />
      ))}
    </div>
  </section>
);

export default Testimonials;
