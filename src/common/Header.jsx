import React, { useEffect, useState } from "react";
import { HEADER_LIST } from "../utils/helper";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false);
  };
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <div className="py-4 bg-orange-400 w-full px-5">
      <div className="max-w-[1140px] mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-3xl font-semibold">
          Logo
        </a>
        <div
          className={`flex gap-4 max-lg:fixed max-lg:top-0 max-lg:-right-full max-lg:h-full max-lg:w-full max-lg:justify-center max-lg:items-center transition-all duration-300 max-lg:flex-col max-lg:bg-orange-400 max-lg:z-10 ${
            open ? "max-lg:!right-0" : ""
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <a
              onClick={closeHandler}
              href="#"
              className="text-xl text-white font-medium hover:scale-105 ease-linear duration-300"
            >
              {obj}
            </a>
          ))}
          <button
            onClick={closeHandler}
            className="lg:hidden py-3 px-4 border border-white rounded-xl text-white text-xl font-bold cursor-pointer hover:bg-white hover:text-orange-400 duration-300 ease-linear"
          >
            About More
          </button>
        </div>
        <button className="max-lg:hidden py-3 px-4 border border-white rounded-xl text-white text-xl font-bold cursor-pointer hover:bg-white hover:text-orange-400 duration-300 ease-linear">
          About More
        </button>
        <div
          onClick={handleClick}
          className="z-[15] flex-col gap-1 lg:hidden flex cursor-pointer"
        >
          <span
            className={`${
              open
                ? "w-8 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded"
                : "w-8 h-1 bg-white duration-300 ease-linear rounded"
            }`}
          ></span>
          <span
            className={`${
              open
                ? "w-8 h-1 bg-white -translate-x-10 opacity-0 duration-300 ease-linear"
                : "w-8 h-1 bg-white duration-700 ease-linear rounded"
            }`}
          ></span>
          <span
            className={`${
              open
                ? "w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded"
                : "w-8 h-1 bg-white duration-300 ease-linear rounded"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
