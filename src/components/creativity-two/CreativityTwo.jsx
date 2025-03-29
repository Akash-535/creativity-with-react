import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
gsap.registerPlugin(ScrollTrigger);

const CreativityTwo = () => {
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(overlayRef.current, {
      width: "0%",
      duration: 2,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "15% bottom",
        toggleActions: "play none none reset",
      },
    });
  }, []);
  return (
    <div>
      <div className="bg-black min-h-screen flex justify-center items-center px-4 text-4xl text-white text-center max-md:text-2xl">
        Scroll Down For Animation
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default CreativityTwo;
