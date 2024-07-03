import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Banner = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient">
        <img src={discount} alt="discount" />
        <p className={`${styles.paragraph} ml-2`}>
          <span>20% </span>
          Discount For <span>1 Month </span>
          Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full text-white">
        <h1 className="text-[52px] font-poppins font-semibold flex-1 ss:text-[72px]">
          The Next
          <span className="text-gradient"> Generation </span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ">
          <GetStarted />
        </div>
      </div>
      <h1 className="text-[52px] font-poppins font-semibold flex-1 ss:text-[68px] w-full text-white">
        Payment Method.
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-16`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </h1>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} relative md:my-0 my-10`}>
      <img
        className="w-[100%] h-[100%] object-contain relative z-[5] -top-16 "
        src={robot}
        alt="billing"
      />
      <div className="pink__gradient top-0 w-[40%] h-[35%] z-0 absolute" />
      {/* <div className="white__gradient bottom-40 w-[80%] h-[80%] z-[1] absolute rounded-full" /> */}
      <div className="blue__gradient bottom-20 w-[50%] h-[50%] z-0 absolute right-20" />
    </div>
    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);

export default Banner;
