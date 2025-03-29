import React from "react";
import { BRAND_LIST } from "../../utils/helper";

const MoreBrand = ({ myClass }) => {
  return (
    <div className="py-4 bg-red-300 min-h-screen w-full flex justify-center items-center relative">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold text-center">
          Explore Our More Brands
        </h2>
        <div className="flex justify-between w-full items-center pt-40 max-w-[1040px] mx-auto">
          <div className={`w-3/12 ${myClass}`}></div>
          {BRAND_LIST.map((obj, i) => (
            <div
              key={i}
              className="flex justify-center items-center w-3/12 relative rounded-2xl"
            >
              <img
                className={`w-full max-w-[478.69px] h-[360px] object-contain mx-auto relative z-10`}
                src={obj.image}
                alt="drinks can"
              />
              <img
                className={`w-full max-w-[258px] h-[360px] object-contain mx-auto absolute ${
                  i === 1 ? "-top-28" : "-top-32"
                }`}
                src={obj.topImage}
                alt="blast"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreBrand;
