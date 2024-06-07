import { motion } from "framer-motion";
import { quotes } from "../assets";
const FeedBackCard = ({ content, name, title, img, y }) => (
  <motion.div
    className="flex justify-between max-w-[370px] px-10 py-12 rounded md:mr-10 sm:mr-5 mr-0 my-5 mb-feedback-card flex-col cursor-pointer "
    transition={{ duration: 1 }}
    initial={{ y: y }}
    whileInView={{ y: 0 }}
  >
    <img
      className="w-[42px] h-[27px] object-contain"
      src={quotes}
      alt="double_qoutes"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    <div className="flex flex-row">
      <img
        className="w-[48px] h-[48px] rounded-full object-contain"
        src={img}
        alt=""
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p>{title}</p>+
      </div>
    </div>
  </motion.div>
);

export default FeedBackCard;
