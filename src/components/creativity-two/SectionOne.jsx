import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dodge from "../../assets/images/creativity-two-img/dodge.webp";
gsap.registerPlugin(ScrollTrigger);

const SectionOne = () => {
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(overlayRef.current, {
      width: "0%",
      duration: 2,
      delay: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "15% bottom",
        toggleActions: "play none none reset",
      },
    });
  }, []);
  return (
    <div
      ref={sectionRef}
      className="min-h-screen justify-center items-center flex flex-col"
    >
      <h2 className="text-center text-4xl pb-3 max-md:text-2xl font-bold">
        Animation One
      </h2>
      <div className="border-2 border-black max-w-[400px] w-full h-[402px] max-lg:max-h-[350px] max-lg:min-h-[350px] max-xl:h-auto overflow-hidden max-lg:max-w-[350px] relative">
        <span
          ref={overlayRef}
          className="block w-full h-full bg-white absolute top-0 right-0"
        ></span>
        <img
          className="max-w-[400px] w-full object-cover max-lg:max-w-[470px] object-center"
          src={dodge}
          alt="car img"
        />
      </div>
    </div>
  );
};

export default SectionOne;
