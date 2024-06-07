import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../Constants";

const Footer = () => (
  <footer
    className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col font-poppins`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[320px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className=" flex flex-[1.5]  w-full flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map(({ links, title }, i) => (
          <div key={i} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-medium text-[18px] leading-[27px] text-white">
              {title}
            </h4>
            <ul className=" list-none mt-4">
              {links.map(({ link, name }, i) => (
                <li
                  key={i}
                  className={`font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    i !== links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#1b2b7269]">
      <p className="font-normal text-center text-[18px] leading-[27px] text-white">
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map(({ id, icon }, i) => (
          <img
            src={icon}
            alt={icon}
            key={id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              i !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
