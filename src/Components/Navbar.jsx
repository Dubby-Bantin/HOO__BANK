import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../Constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex py-6 w-full justify-between items-center  sticky top-0 z-50 backdrop-blur-lg p-5">
      <img className=" w-[124px] h-[32px]" src={logo} alt="" />

      <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map(({ id, title }, index) => (
          <li
            className={`font-poppins cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={id}
          >
            {title}
          </li>
        ))}
      </ul>

      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img
          className=" cursor-pointer w-[28px] object-contain transition-all duration-1000 delay-100"
          onClick={() => setToggle((p) => !p)}
          src={toggle ? close : menu}
          alt="menu"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 rounded-xl sidebar my-2 min-w-[140px]`}
        >
          <ul className=" list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map(({ id, title }, index) => (
              <li
                className={`font-poppins cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }
                }`}
                key={id}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
