import React from "react";
import fantaCan from "../../assets/images/creativity-one-img/fanta-can.webp";
import fantaFixedLeaf from "../../assets/images/creativity-one-img/fanta-fixed-leaf.webp";
import fantaLeafOne from "../../assets/images/creativity-one-img/fanta-leaf.webp";
import fantaLeafTwo from "../../assets/images/creativity-one-img/fanta-leaf-two.webp";
import fantaCutOrange from "../../assets/images/creativity-one-img/orange.webp";
import fantaFullOrange from "../../assets/images/creativity-one-img/full-orange.webp";

const Hero = ({ fantaClass, leafOne, leafTwo, halfOrange, fullOrange }) => {
  return (
    <div className="bg-gradient-to-l from-red-400 to-orange-500 min-h-screen flex items-center justify-center relative">
      <img
        className="w-[20%] fixed-leaf absolute top-[10%] right-0"
        src={fantaFixedLeaf}
        alt="fixed leaf"
      />
      <div className="relative">
        <img
          className={`w-[60%] absolute z-[2] common-transition top-[20%] left-[20%] max-lg:left-[30%] ${fantaClass}`}
          src={fantaCan}
          alt="fanta can"
        />
        <img
          className={`w-[18%] common-transition absolute top-[-10%] left-0 rotate-[60deg] max-lg:hidden ${leafOne}`}
          src={fantaLeafOne}
          alt="leaf one"
        />
        <img
          className={`w-[12%] common-transition absolute top-[70%] left-[80%] -rotate-90 max-lg:hidden ${leafTwo}`}
          src={fantaLeafTwo}
          alt="leaf two"
        />
        <img
          className={`common-transition absolute top-[10%] left-[500%] z-[1] ${halfOrange}`}
          src={fantaCutOrange}
          alt="half orange"
        />
        <img
          className={`w-[50%] common-transition absolute top-[55%] right-[500%] ${fullOrange}`}
          src={fantaFullOrange}
          alt="full orange"
        />
        <h1 className="fanta-text text-white text-[250px] font-medium max-xl:text-[200px] max-lg:text-[180px] max-md:text-[120px] px-5">
          FANTA
        </h1>
      </div>
    </div>
  );
};

export default Hero;
